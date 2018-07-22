import { h } from 'hyperapp'
import '~/css/components/Counter'

export default ({ count, increment, decrement }) => (
  <div class="Counter">
    <button class="Counter-button" onclick={decrement} disabled={count <= 0}>
      –
    </button>
    <div class="Counter-count">{count}</div>
    <button class="Counter-button" onclick={increment}>
      +
    </button>
  </div>
)
