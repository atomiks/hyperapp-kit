export default {
  increment: () => state => ({ count: state.count + 1 }),
  decrement: () => state => ({ count: state.count - 1 })
}
