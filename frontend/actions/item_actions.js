import * as ItemAPIUtils from '../utils/item_utils'

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_ORDER_ITEMS = 'RECEIVE_ORDER_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
// export const REFRESH_CART = 'REFRESH_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const receiveCartItems = items => ({
  type: RECEIVE_CART_ITEMS,
  items
})

const receiveOrderItems = items => ({
  type: RECEIVE_ORDER_ITEMS,
  items
})

const receiveCartItem = item => ({
  type: RECEIVE_CART_ITEM,
  item
})

const removeCartItem = item => ({
  type: REMOVE_CART_ITEM,
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

export const updateCartItem = item => dispatch => (
  ItemAPIUtils.updateCartItem(item)
    .then(item => dispatch(receiveCartItem(item)))
)

// export const refreshCart = () => dispatch => (
//   dispatch({type: REFRESH_CART})
// )

export const deleteCartItem = itemId => dispatch => (
  ItemAPIUtils.removeCartItem(itemId)
    .then(item => dispatch(removeCartItem(item)))
)
