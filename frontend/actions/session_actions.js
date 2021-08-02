import * as SessionApiUtils from '../utils/session_api_utils'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOG_OUT_CURRENT_USER = 'LOG_OUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logOutCurrentUser = () => ({
  type: LOG_OUT_CURRENT_USER
})

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const sign_up = user => dispatch => (
  SessionApiUtils.sign_up(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)

export const log_in = user => dispatch => (
  SessionApiUtils.log_in(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)

export const log_out = () => dispatch => (
  SessionApiUtils.log_out()
    .then(() => dispatch(logOutCurrentUser()), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)