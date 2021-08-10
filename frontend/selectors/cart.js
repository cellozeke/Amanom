export const isCartDataReady = state => (
  state.entities.cartItems !== null
)

export const getCartItems = state => (
  state.entities.cartItems || []
)

export const getCartPrices = state => {
  let items = state.entities.cartItems
  if (items === null) return null
  return items.map(item => item.snack.price * item.quantity)
}

export const getCartChange = state => {
  if (!state.entities.recentItem) return null
  if (Object.keys(state.entities.recentItem).length === 0) return null
  let current = Object.assign({}, state.entities.recentItem)
  current.quantity = parseInt(current.quantity)
  let prev = state.entities.cartItems.filter(item => item.snackId === current.snackId)[0]
  console.log(prev)
  if (!prev) return null
  return current.quantity - prev.quantity
}
