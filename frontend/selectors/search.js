export const getWords = props => {
  let searchString = props.location.search
  let urlSearchParams = new URLSearchParams(searchString)
  return Object.fromEntries(urlSearchParams.entries()).q.split(' ')
}
