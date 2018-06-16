import { h } from "hyperapp"

export default ({ by }, text) => (state, actions) => (
  <button
    class="CounterButton"
    onclick={() => actions.count(by)}
    disabled={by === -1 && state.count <= 0}
  >
    {text}
  </button>
)
