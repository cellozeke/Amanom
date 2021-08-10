export const isCartDataReady = state => (
  state.entities.cartItems !== null
)

export const getCartItem = (state, ownProps) => {
  let items = state.entities.cartItems
  if (!items) return null
  let snackId = parseInt(ownProps.match.params.snackId)
  let matchingItem = items.find(item => item.snackId === snackId) || {snackId: snackId, userId: state.session.id, orderId: null, quantity: 0}
  let id = matchingItem.hasOwnProperty('id') ? matchingItem.id : null
  return {matchingItem, id, originalQuantity: matchingItem.quantity}
}

export const getCartItems = state => {
  let items = state.entities.cartItems
  if (!items) return []
  let clonedItems = [...items]
  return clonedItems.sort((a, b) => b.updatedAt - a.updatedAt)
  // state.entities.cartItems || []
}

export const getCartPrices = state => {
  let items = state.entities.cartItems
  if (!items) return null
  // if (items === null) return null
  let sortedItems = [...items].sort((a, b) => b.updatedAt - a.updatedAt)
  return sortedItems.map(item => item.snack.price * item.quantity)
  // return items.map(item => item.snack.price * item.quantity)
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
