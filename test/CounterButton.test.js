import { h, app } from "hyperapp"
import CounterButton from "../src/js/components/CounterButton"
import state from "../src/js/state"
import actions from "../src/js/actions"

beforeEach(() => {
  document.body.innerHTML = ""
})

describe("CounterButton", () => {
  test("subtract is disabled initially", done => {
    const view = state => (
      <div
        oncreate={() => {
          expect(document.querySelector(".CounterButton").disabled).toBe(true)
          done()
        }}
      >
        <CounterButton by={-1} />
      </div>
    )

    app(state, actions, view, document.body)
  })

  test("count +1 sets count DOM to 1", done => {
    const view = state => (
      <div
        oncreate={() => {
          expect(document.querySelector("#count").textContent).toBe("1")
          done()
        }}
      >
        <div id="count">{state.count}</div>
      </div>
    )

    const main = app(state, actions, view, document.body)
    main.count(1)
  })

  test("count -1 sets count DOM to -1", done => {
    const view = state => (
      <div
        oncreate={() => {
          expect(document.querySelector("#count").textContent).toBe("-1")
          done()
        }}
      >
        <div id="count">{state.count}</div>
      </div>
    )

    const main = app(state, actions, view, document.body)
    main.count(-1)
  })

  test("clicking will change count", done => {
    const view = (state, actions) => (
      <div
        oncreate={() => {
          document.querySelector(".CounterButton").click()
          setTimeout(() => {
            expect(document.querySelector("#count").textContent).toBe("1")
            done()
          })
        }}
      >
        <div id="count">{state.count}</div>
        <CounterButton by={1}>Add</CounterButton>
      </div>
    )

    app(state, actions, view, document.body)
  })
})
