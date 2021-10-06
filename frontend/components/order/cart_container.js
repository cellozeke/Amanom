import Cart from "./cart"
import { connect } from "react-redux"
import { deleteCartItem, fetchCartItems, refreshCartItems, updateCartItem } from "../../actions/item_actions"
import { getCartItems, isCartDataReady } from "../../selectors/cart"
import { createOrder } from "../../actions/order_actions"

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  cartItems: getCartItems(state),
  isCartDataReady: isCartDataReady(state),
})

const mapDispatchToProps = dispatch => ({
  fetchCartItems: userId => dispatch(fetchCartItems(userId)),
  updateCartItem: item => dispatch(updateCartItem(item)),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId)),
  refreshCartItems: () => dispatch(refreshCartItems()),
  createOrder: () => dispatch(createOrder())
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer;
