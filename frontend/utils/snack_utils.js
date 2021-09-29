export const fetchSnack = snackId => (
  $.ajax({
    url: `/api/snacks/${snackId}`
  })
)

export const fetchSearchedSnacks = words => (
  $.ajax({
    url: '/api/search_results',
    data: { words }
  })
)

export const fetchRecSnacks = () => (
  $.ajax({
    url: '/api/rec_snacks'
  })
)

export const fetchSnackNames = () => (
  $.ajax({
    url: '/api/snack_names'
  })
)
