import { h } from "hyperapp"
import Counter from "./components/Counter"
import hyperappLogo from "~/img/hyperapp.svg"

export default (state, actions) => (
  <div class="app">
    <img class="hyperapp-logo" src={hyperappLogo} />
    <h1>Hyperapp Kit</h1>
    <Counter count={state.count} />
  </div>
)
