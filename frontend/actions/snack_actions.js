import * as SnackAPIUtils from "../utils/snack_utils";

export const RECEIVE_SNACK = 'RECEIVE_SNACK'
export const RECEIVE_SEARCHED_SNACKS = 'RECEIVE_SEARCHED_SNACKS'
export const CLEAR_SEARCHED_SNACKS = 'CLEAR_SEARCHED_SNACKS'
export const RECEIVE_REC_SNACKS = 'RECEIVE_REC_SNACKS'
export const RECEIVE_SNACK_NAMES = 'RECEIVE_SNACK_NAMES'

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

const receiveRecSnacks = snacks => ({
  type: RECEIVE_REC_SNACKS,
  snacks
})

const receiveSnackNames = names => ({
  type: RECEIVE_SNACK_NAMES,
  names
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

export const fetchRecSnacks = () => dispatch => (
  SnackAPIUtils.fetchRecSnacks()
    .then(snacks => dispatch(receiveRecSnacks(snacks)))
)

export const fetchSnackNames = () => dispatch => (
  SnackAPIUtils.fetchSnackNames()
    .then(names => dispatch(receiveSnackNames(names)))
)
