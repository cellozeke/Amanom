import * as OrderAPIUtils from '../utils/order_utils'

export const RECEIVE_ORDER = 'RECEIVE_ORDER'
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS'
export const CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS'

const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
})

const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
})

const clearCartItems = () => ({
  type: CLEAR_CART_ITEMS
})

export const fetchOrders = () => dispatch => (
  OrderAPIUtils.fetchOrders()
    .then(orders => dispatch(receiveOrders(orders)))
)

export const createOrder = () => dispatch => (
  OrderAPIUtils.createOrder()
    .then(order => {
      dispatch(clearCartItems())
      dispatch(receiveOrder(order))
    })
)
