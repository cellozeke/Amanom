import * as OrderAPIUtils from '../utils/order_utils'

export const RECEIVE_ORDER = 'RECEIVE_ORDER'
export const CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS'

const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
})

const clearCartItems = () => ({
  type: CLEAR_CART_ITEMS
})

// export const fetchOrder = orderId => dispatch => (
//   OrderAPIUtils.fetchCurrentOrder(orderId)
//     .then(order => dispatch(receiveOrder(order)))
// )

export const createOrder = () => dispatch => (
  OrderAPIUtils.createOrder()
    .then(order => dispatch(clearCartItems()))
    // .then(order => dispatch(receiveOrder(order)))
)
