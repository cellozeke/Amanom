export const fetchSnackReviews = snackId => (
  $.ajax({
    url: `/api/snack_reviews/${snackId}`
  })
)

export const fetchUserReviews = userId => (
  $.ajax({
    url: `/api/user_reviews/${userId}`
  })
)

export const createSnackReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  })
)

export const updateSnackReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
)
