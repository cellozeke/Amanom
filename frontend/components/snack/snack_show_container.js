import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { addRecentItem, createCartItem, deleteCartItem, updateCartItem } from "../../actions/item_actions"
import { fetchSnack } from "../../actions/snack_actions"
import { getCartItem, getCartItems, isCartDataReady } from "../../selectors/cart"
import { refreshCartItems } from "../../actions/item_actions"
import SnackShow from "./snack_show"

const mapStateToProps = (state, ownProps) => ({
  sessionId: state.session.id,
  snack: state.entities.snacks[ownProps.match.params.snackId],
  cartItems: getCartItems(state),
  cartItem: getCartItem(state, ownProps),
  isCartDataReady: isCartDataReady(state)
})

const mapDispatchToProps = dispatch => ({
  fetchSnack: snackId => dispatch(fetchSnack(snackId)),
  createCartItem: item => dispatch(createCartItem(item)),
  updateCartItem: item => dispatch(updateCartItem(item)),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId)),
  addRecentItem: item => dispatch(addRecentItem(item)),
  refreshCartItems: () => dispatch(refreshCartItems())
})

const SnackShowContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SnackShow))
export default SnackShowContainer
