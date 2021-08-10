import Cart from "./cart"
import { connect } from "react-redux"
import { deleteCartItem, fetchCartItems, refreshItems, updateCartItem } from "../../actions/item_actions"
import { getCartItems, isCartDataReady } from "../../selectors/cart"

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  cartItems: getCartItems(state),
  isCartDataReady: isCartDataReady(state)
})

const mapDispatchToProps = dispatch => ({
  // fetchCartItems: () => dispatch(fetchCartItems()),
  updateCartItem: item => dispatch(updateCartItem(item)),
  refreshItems: () => dispatch(refreshItems()),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId))
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer
