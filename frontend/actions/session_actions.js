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

export const signUp = user => dispatch => (
  SessionApiUtils.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)

export const logIn = user => dispatch => (
  SessionApiUtils.logIn(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)

export const logOut = () => dispatch => (
  SessionApiUtils.logOut()
    .then(() => dispatch(logOutCurrentUser()), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)
