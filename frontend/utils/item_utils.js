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

export const createCartItem = item => (
  $.ajax({
    method: 'POST',
    url: '/api/items',
    data: { item }
  })
)

export const updateCartItem = item => (
  $.ajax({
    method: 'PATCH',
    url: `/api/items/${item.id}`,
    data: { item }
  })
)

export const removeCartItem = itemId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/items/${itemId}`
  })
)
