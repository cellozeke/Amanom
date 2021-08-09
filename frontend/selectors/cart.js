export const isCartDataReady = state => (
  state.entities.cartItems !== null
)

export const getCartItems = state => (
  state.entities.cartItems || []
)
