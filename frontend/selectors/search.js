export const getWords = props => {
  let searchString = props.location.search
  let urlSearchParams = new URLSearchParams(searchString)
  let searchObject = Object.fromEntries(urlSearchParams.entries())
  if (!searchObject.hasOwnProperty('q')) return null
  if (searchObject.q === '') return null
  return searchObject.q.split(' ')
}

export const getSearchedSnacks = state => (
  state.entities.search
)
