import { AstroSite } from 'sst/constructs'
import type { SSTConfig } from 'sst'
import { Tags } from 'aws-cdk-lib'

const SITE_HOST = process.env.SITE_HOST ?? ''
const SITE_DOMAIN = `astro-hybrid.${SITE_HOST}`
const SITE_URL = `https://${SITE_DOMAIN}`

export default {
  config(_input) {
    return {
      name: 'astro-sst-template',
      stage: 'streamed',
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
          domainName: SITE_DOMAIN,
          hostedZone: SITE_HOST
        },
        environment: {
          VITE_SITE_URL: SITE_URL,
          SECRET_KEY: 'secret-key',
          VITE_KEY: 'vite-key',
          PUBLIC_KEY: 'public-key'
        }
      })
      stack.addOutputs({
        url: site.customDomainUrl
      })
    })
  }
} satisfies SSTConfig
