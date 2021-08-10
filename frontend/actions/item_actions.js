import * as ItemAPIUtils from '../utils/item_utils'

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_ORDER_ITEMS = 'RECEIVE_ORDER_ITEMS'
export const CREATE_CART_ITEM = 'CREATE_CART_ITEM'
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
export const ZERO_STORE_CART_ITEM = 'ZERO_STORE_CART_ITEM'
export const REFRESH_CART_ITEMS = 'REFRESH_CART_ITEMS'
export const REFRESH_RECENT_ITEM = 'REFRESH_RECENT_ITEM'
export const ADD_RECENT_ITEM = 'ADD_RECENT_ITEM'

const receiveCartItems = items => ({
  type: RECEIVE_CART_ITEMS,
  items
})

const receiveOrderItems = items => ({
  type: RECEIVE_ORDER_ITEMS,
  items
})

const makeCartItem = item => ({
  type: CREATE_CART_ITEM,
  item
})

const editCartItem = item => ({
  type: UPDATE_CART_ITEM,
  item
})

const zeroStoreCartItem = itemId => ({
  type: ZERO_STORE_CART_ITEM,
  itemId
})

const receiveRecentItem = item => ({
  type: ADD_RECENT_ITEM,
  item
})

export const fetchCartItems = userId => dispatch => (
  ItemAPIUtils.fetchCartItems(userId)
    .then(items => dispatch(receiveCartItems(items)))
)

export const fetchOrderItems = orderId => dispatch => (
  ItemAPIUtils.fetchOrderItems(orderId)
    .then(items => dispatch(receiveOrderItems(items)))
)

export const createCartItem = item => dispatch => (
  ItemAPIUtils.createCartItem(item)
    .then(item => dispatch(makeCartItem(item)))
)

export const updateCartItem = item => dispatch => (
  ItemAPIUtils.updateCartItem(item)
    .then(item => dispatch(editCartItem(item)))
)

export const deleteCartItem = itemId => dispatch => (
  ItemAPIUtils.removeCartItem(itemId)
    .then(item => dispatch(zeroStoreCartItem(item.id)))
)

export const refreshCartItems = () => dispatch => (
  dispatch({type: REFRESH_CART_ITEMS})
)

export const refreshRecentItem = () => dispatch => (
  dispatch({type: REFRESH_RECENT_ITEM})
)

export const addRecentItem = item => dispatch => (
  dispatch(receiveRecentItem(item))
)
