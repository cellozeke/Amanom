export const fetchCartItems = userId => (
  $.ajax({
    url: `/api/cart_items/${userId}`
  })
)

export const fetchOrderItems = orderId => (
  $.ajax({
    url: `/api/order_items/${orderId}`
  })
)


