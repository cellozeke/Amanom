export const createOrder = () => (
  $.ajax({
    method: 'POST',
    url: '/api/orders',
    // data: { order }
  })
)

export const fetchOrders = () => (
  $.ajax({
    url: '/api/user_orders'
  })
)

// export const 
