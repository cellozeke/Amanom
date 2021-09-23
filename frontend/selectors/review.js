export const getUserReview = (state, ownProps) => {
  return state.entities.reviews.find(review => review.userId === state.session.id && review.snackId === parseInt(ownProps.match.params.snackId)) || null
}
