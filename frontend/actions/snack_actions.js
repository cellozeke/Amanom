import { fetchSnack } from "../utils/snack_utils";

export const RECEIVE_SNACK = 'RECEIVE_SNACK'

const receiveSnack = snack => ({
  type: RECEIVE_SNACK,
  snack
})

export const fetchSnack = snackId => dispatch => (
  fetchSnack(snackId)
    .then(snack => dispatch(receiveSnack(snack)))
)
