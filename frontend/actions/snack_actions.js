import * as SnackAPIUtils from "../utils/snack_utils";

export const RECEIVE_SNACK = 'RECEIVE_SNACK'
export const RECEIVE_SEARCHED_SNACKS = 'RECEIVE_SEARCHED_SNACKS'
export const CLEAR_SEARCHED_SNACKS = 'CLEAR_SEARCHED_SNACKS'
// export const RECEIVE_POPULAR_SNACKS = 'RECEIVE_POPULAR_SNACKS'
export const RECEIVE_REC_SNACKS = 'RECEIVE_REC_SNACKS'

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

// const receivePopularSnacks = snacks => ({
//   type: RECEIVE_POPULAR_SNACKS,
//   snacks
// })

const receiveRecSnacks = snacks => ({
  type: RECEIVE_REC_SNACKS,
  snacks
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

// export const fetchPopularSnacks = () => dispatch => (
//   SnackAPIUtils.fetchPopularSnacks()
//     .then(snacks => dispatch(receivePopularSnacks(snacks)))
// )

export const fetchRecSnacks = () => dispatch => (
  SnackAPIUtils.fetchRecSnacks()
    .then(snacks => dispatch(receiveRecSnacks(snacks)))
)
