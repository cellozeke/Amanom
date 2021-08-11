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
