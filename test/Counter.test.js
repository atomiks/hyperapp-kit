import { h, app } from 'hyperapp'
import Counter from '../src/js/components/Counter'
import state from '../src/js/state'
import actions from '../src/js/actions'

beforeEach(() => {
  document.body.innerHTML = ''
})

describe('Counter', () => {
  test('subtract is disabled initially', done => {
    const view = state => <Counter count={state.count} />
    app(state, actions, view, document.body)
    setTimeout(() => {
      expect(document.querySelector('.Counter-button').disabled).toBe(true)
      done()
    })
  })

  test('increment sets count DOM to 1', done => {
    const view = (state, actions) => (
      <Counter
        count={state.count}
        increment={actions.increment}
        decrement={actions.decrement}
      />
    )
    const main = app(state, actions, view, document.body)
    main.increment()
    setTimeout(() => {
      expect(document.querySelector('.Counter-count').textContent).toBe('1')
      done()
    })
  })

  test('decrement sets count DOM to 0 if initially 1', done => {
    const view = (state, actions) => (
      <Counter
        count={state.count}
        increment={actions.increment}
        decrement={actions.decrement}
      />
    )
    const main = app({ count: 1 }, actions, view, document.body)
    main.decrement()
    setTimeout(() => {
      expect(document.querySelector('.Counter-count').textContent).toBe('0')
      done()
    })
  })

  test('clicking button will change count', done => {
    const view = (state, actions) => (
      <main
        oncreate={() => {
          const decrementButton = document.querySelector('.Counter-button')
          const count = document.querySelector('.Counter-count')
          decrementButton.click()
          setTimeout(() => {
            expect(count.textContent).toBe('4')
            done()
          })
        }}
      >
        <Counter
          count={state.count}
          increment={actions.increment}
          decrement={actions.decrement}
        />
      </main>
    )
    app({ count: 5 }, actions, view, document.body)
  })
})
