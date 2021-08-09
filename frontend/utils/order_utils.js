export const fetchCurrentOrder = orderId => (
  $.ajax({
    url: `/api/orders/${orderId}`
  })
)

export const createOrder = order => (
  $.ajax({
    method: 'POST',
    url: '/api/orders',
    data: { order }
  })
)

export const updateOrder = order => (
  $.ajax({
    method: 'PATCH',
    url: `/api/orders/${order.id}`,
    data: { order }
  })
)
