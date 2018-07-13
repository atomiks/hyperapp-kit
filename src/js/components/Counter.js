import { h } from 'hyperapp'
import CounterButton from './CounterButton'
import '~/css/components/Counter'

export default ({ count }) => (
  <div class="Counter">
    <CounterButton by={-1}>-</CounterButton>
    <div class="Counter__count">{count}</div>
    <CounterButton by={1}>+</CounterButton>
  </div>
)
