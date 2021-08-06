import * as OrderAPIUtils from '../utils/order_utils'

export const RECEIVE_ORDER = 'RECEIVE_ORDER'

const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
})

export const fetchOrder = orderId => dispatch => (
  OrderAPIUtils.fetchOrder(orderId)
    .then(order => dispatch(receiveOrder(order)))
)

export const createOrder = order => dispatch => (
  OrderAPIUtils.createOrder(order)
    .then(order => dispatch(receiveOrder(order)))
)

export const updateOrder = order => dispatch => (
  OrderAPIUtils.updateOrder(order)
    .then(order => dispatch(receiveOrder(order)))
)
