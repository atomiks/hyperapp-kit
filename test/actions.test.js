import actions from "../src/js/actions"

describe("count", () => {
  test("add 1", () => {
    const add1 = actions.count(1)({ count: 0 })
    expect(add1).toEqual({ count: 1 })
  })

  test("subtract 1", () => {
    const sub1 = actions.count(-1)({ count: 0 })
    expect(sub1).toEqual({ count: -1 })
  })

  test("add 1 non-initial state", () => {
    const add1 = actions.count(1)({ count: 18 })
    expect(add1).toEqual({ count: 19 })
  })

  test("subtract 1 non-initial state", () => {
    const sub1 = actions.count(-1)({ count: 8729 })
    expect(sub1).toEqual({ count: 8728 })
  })
})
