import { h } from "hyperapp"
import CounterButton from "./CounterButton"

export default ({ count }) => (
  <div class="Counter">
    <CounterButton by={-1}>-</CounterButton>
    <div class="Counter__count">{count}</div>
    <CounterButton by={1}>+</CounterButton>
  </div>
)
