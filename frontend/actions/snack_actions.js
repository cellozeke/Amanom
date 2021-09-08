import * as SnackAPIUtils from "../utils/snack_utils";

export const RECEIVE_SNACK = 'RECEIVE_SNACK'
export const RECEIVE_SEARCHED_SNACKS = 'RECEIVE_SEARCHED_SNACKS'
export const CLEAR_SEARCHED_SNACKS = 'CLEAR_SEARCHED_SNACKS'
export const RECEIVE_POPULAR_SNACKS = 'RECEIVE_POPULAR_SNACKS'
export const SORT_BY_RELEVANCE = 'SORT_BY_RELEVANCE'
export const SORT_BY_ASCENDING_PRICE = 'SORT_BY_ASCENDING_PRICE'
export const SORT_BY_DESCENDING_PRICE = 'SORT_BY_DESCENDING_PRICE'
export const SORT_BY_RATING = 'SORT_BY_RATING'
export const SORT_BY_REVIEWS = 'SORT_BY_REVIEWS'

const receiveSnack = snack => ({
  type: RECEIVE_SNACK,
  snack
})

const receiveSearchedSnacks = snacks => ({
  type: RECEIVE_SEARCHED_SNACKS,
  snacks
})

const clearSearchedSnacks = () => ({
  type: CLEAR_SEARCHED_SNACKS
})

const receivePopularSnacks = snacks => ({
  type: RECEIVE_POPULAR_SNACKS,
  snacks
})

const sortByRelevanceAction = () => ({
  type: SORT_BY_RELEVANCE
})

const sortByAscendingPriceAction = () => ({
  type: SORT_BY_ASCENDING_PRICE
})

const sortByDescendingPriceAction = () => ({
  type: SORT_BY_DESCENDING_PRICE
})

const sortByRatingAction = () => ({
  type: SORT_BY_RATING
})

const sortByReviewsAction = () => ({
  type: SORT_BY_REVIEWS
})

export const fetchSnack = snackId => dispatch => (
  SnackAPIUtils.fetchSnack(snackId)
    .then(snack => dispatch(receiveSnack(snack)))
)

export const fetchSearchedSnacks = words => dispatch => (
  SnackAPIUtils.fetchSearchedSnacks(words)
    .then(snacks => dispatch(receiveSearchedSnacks(snacks)))
)

export const refreshSearchedSnacks = () => dispatch => (
  dispatch(clearSearchedSnacks())
)

export const sortByRelevance = () => dispatch => (
  dispatch(sortByRelevanceAction())
)

export const sortByAscendingPrice = () => dispatch => (
  dispatch(sortByAscendingPriceAction())
)

export const sortByDescendingPrice = () => dispatch => (
  dispatch(sortByDescendingPriceAction())
)

export const sortByRating = () => dispatch => (
  dispatch(sortByRatingAction())
)

export const sortByReviews = () => dispatch => (
  dispatch(sortByReviewsAction())
)

// export const fetchPopularSnacks = () => dispatch => (
//   SnackAPIUtils.fetchPopularSnacks()
//     .then(snacks => dispatch(receivePopularSnacks(snacks)))
// )
