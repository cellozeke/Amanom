export const fetchSnack = snackId => (
  $.ajax({
    url: `/api/snacks/${snackId}`
  })
)
