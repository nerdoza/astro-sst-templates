import { component$, useSignal } from '@builder.io/qwik'

export default component$(() => {
  const counter = useSignal(0)

  return <button onClick$={() => counter.value++}>{counter.value}</button>
})
