import * as SnackAPIUtils from "../utils/snack_utils";

export const RECEIVE_SNACK = 'RECEIVE_SNACK'
export const RECEIVE_SEARCHED_SNACKS = 'RECEIVE_SEARCHED_SNACKS'
export const CLEAR_SEARCHED_SNACKS = 'CLEAR_SEARCHED_SNACKS'

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
