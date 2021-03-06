import * as SessionApiUtils from '../utils/session_api_utils'
import { fetchCartItems } from './item_actions'
import { fetchOrders } from './order_actions'
import { fetchUserReviews } from './review_actions'

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

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signUp = user => dispatch => (
  SessionApiUtils.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
    .then(res => {
      fetchCartItems(res.user.id)(dispatch)
      fetchOrders()(dispatch)
      fetchUserReviews(res.user.id)(dispatch)
    })
)

export const logIn = user => dispatch => (
  SessionApiUtils.logIn(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
    .then(res => {
      fetchCartItems(res.user.id)(dispatch)
      fetchOrders()(dispatch)
      fetchUserReviews(res.user.id)(dispatch)
    })
)

export const logOut = () => dispatch => (
  SessionApiUtils.logOut()
    .then(() => dispatch(logOutCurrentUser()), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
)
