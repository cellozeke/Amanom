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
  if (!items) return {items: [], prices: []}
  let sortedItems = [...items].sort((a, b) => b.updatedAt - a.updatedAt)
  return {items: sortedItems, prices: sortedItems.map(item => item.snack.price * item.quantity)}
}
