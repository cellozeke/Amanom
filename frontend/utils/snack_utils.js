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

// export const fetchPopularSnacks = () => (
//   $.ajax({
//     url: '/api/popular_snacks'
//   })
// )

export const fetchRecSnacks = () => (
  $.ajax({
    url: '/api/rec_snacks'
  })
)
