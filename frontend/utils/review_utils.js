export const fetchSnackReviews = snackId => (
  $.ajax({
    url: `/api/snack_reviews/${snackId}`
  })
)
