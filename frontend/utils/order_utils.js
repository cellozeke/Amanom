// export const fetchCurrentOrder = orderId => (
//   $.ajax({
//     url: `/api/orders/${orderId}`
//   })
// )

export const createOrder = () => (
  $.ajax({
    method: 'POST',
    url: '/api/orders',
    // data: { order }
  })
)

// export const 
