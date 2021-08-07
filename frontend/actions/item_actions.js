import * as ItemAPIUtils from '../utils/item_utils'

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_ORDER_ITEMS = 'RECEIVE_ORDER_ITEMS'

const receiveCartItems = items => ({
  type: RECEIVE_CART_ITEMS,
  items
})

const receiveOrderItems = items => ({
  type: RECEIVE_ORDER_ITEMS,
  items
})

export const fetchCartItems = userId => dispatch => (
  ItemAPIUtils.fetchCartItems(userId)
    .then(items => dispatch(receiveCartItems(items)))
)

export const fetchOrderItems = orderId => dispatch => (
  ItemAPIUtils.fetchOrderItems(orderId)
    .then(items => dispatch(receiveOrderItems(items)))
)
