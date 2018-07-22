import actions from '../src/js/actions'

describe('increment', () => {
  test('initial state', () => {
    const inc = actions.increment()({ count: 0 })
    expect(inc).toEqual({ count: 1 })
  })

  test('non-initial state', () => {
    const inc = actions.increment()({ count: 18 })
    expect(inc).toEqual({ count: 19 })
  })
})

describe('decrement', () => {
  test('initial state', () => {
    const dec = actions.decrement()({ count: 1 })
    expect(dec).toEqual({ count: 0 })
  })

  test('non-initial state', () => {
    const dec = actions.decrement()({ count: 18 })
    expect(dec).toEqual({ count: 17 })
  })
})
