import { h } from "hyperapp"
import CounterButton from "./CounterButton"

export default () => state => (
  <div class="Counter">
    <CounterButton by={-1}>-</CounterButton>
    <div class="Counter__count">{state.count}</div>
    <CounterButton by={1}>+</CounterButton>
  </div>
)
