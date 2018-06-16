import { h } from "hyperapp"
import Counter from "./components/Counter"

export default (state, actions) => (
  <div class="app">
    <img class="hyperapp-logo" src={require("../img/hyperapp.svg")} />
    <h1>Hyperapp Kit</h1>
    <Counter />
  </div>
)
