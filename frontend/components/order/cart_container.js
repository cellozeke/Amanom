import Cart from "./cart"
import { connect } from "react-redux"
import { deleteCartItem, refreshCartItems, updateCartItem } from "../../actions/item_actions"
import { getCartItems, isCartDataReady } from "../../selectors/cart"

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  cartItems: getCartItems(state),
  isCartDataReady: isCartDataReady(state),
})

const mapDispatchToProps = dispatch => ({
  updateCartItem: item => dispatch(updateCartItem(item)),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId)),
  refreshCartItems: () => dispatch(refreshCartItems())
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer
