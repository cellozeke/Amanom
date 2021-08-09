import Cart from "./cart"
import { connect } from "react-redux"
import { deleteCartItem, refreshCart, updateCartItem } from "../../actions/item_actions"
import { getCartItems, isCartDataReady } from "../../selectors/cart"

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  cartItems: getCartItems(state),
  isCartDataReady: isCartDataReady(state)
})

const mapDispatchToProps = dispatch => ({
  updateCartItem: item => dispatch(updateCartItem(item)),
  // refreshCart: () => dispatch(refreshCart()),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId))
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer
