import { AstroSite } from 'sst/constructs'
import type { SSTConfig } from 'sst'
import { Tags } from 'aws-cdk-lib'
import 'dotenv/config'

const SITE_HOST = process.env.SITE_HOST ?? 'failed-to-load-env'

export default {
  config(_input) {
    return {
      name: 'astro-sst-template-ssr',
      region: 'us-west-2',
      profile: 'sst',
      bootstrap: {
        tags: {
          'Cost Center': 'Shared',
          Environment: 'Production',
          IaC: 'SST',
          Stack: 'IaC SST'
        }
      }
    }
  },
  stacks(app) {
    Tags.of(app).add('Cost Center', 'Personal')
    Tags.of(app).add('Environment', 'Development')
    Tags.of(app).add('IaC', 'SST')
    Tags.of(app).add('Stack', 'Astro + SST Templates')

    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, 'astro-sst-streamed', {
        memorySize: '128 MB',
        customDomain: {
          domainName: `${app.stage}.${SITE_HOST}`,
          hostedZone: SITE_HOST
        }
      })
      stack.addOutputs({
        url: site.customDomainUrl
      })
    })
  }
} satisfies SSTConfig
