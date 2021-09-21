export const canReview = (state, ownProps) => {
  let snack = state.entities.snacks[ownProps.match.params.snackId]
  if (!snack || !state.entities.orders) return null
  let reviewerIds = (state.entities.snacks[ownProps.match.params.snackId]).reviews.map(review => review.userId)
  if (reviewerIds.includes(parseInt(state.session.id))) return false
  let orderedItems = state.entities.orders.map(order => order.orderItems.map(orderItem => orderItem.snack.id)).flat()
  return orderedItems.includes(parseInt(ownProps.match.params.snackId))
}
