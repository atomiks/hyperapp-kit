import { h } from 'hyperapp'
import Counter from './components/Counter'
import hyperappLogo from '~/img/hyperapp.svg'

export default (state, actions) => (
  <div class="app">
    <img class="hyperapp-logo" src={hyperappLogo} alt="Hyperapp" />
    <h1>Hyperapp Kit</h1>
    <Counter
      count={state.count}
      increment={actions.increment}
      decrement={actions.decrement}
    />
  </div>
)
