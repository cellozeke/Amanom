export const fetchSnackReviews = snackId => (
  $.ajax({
    url: `/api/snack_reviews/${snackId}`
  })
)

export const createSnackReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  })
)
