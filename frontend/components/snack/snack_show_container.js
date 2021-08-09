import { connect } from "react-redux"
import { createCartItem, deleteCartItem, updateCartItem } from "../../actions/item_actions"
import { fetchSnack } from "../../actions/snack_actions"
import { getCartItems, isCartDataReady } from "../../selectors/cart"
import SnackShow from "./snack_show"

const mapStateToProps = (state, ownProps) => ({
  sessionId: state.session.id,
  snack: state.entities.snacks[ownProps.match.params.snackId],
  cartItems: getCartItems(state),
  isCartDataReady: isCartDataReady(state)
})

const mapDispatchToProps = dispatch => ({
  fetchSnack: snackId => dispatch(fetchSnack(snackId)),
  createCartItem: item => dispatch(createCartItem(item)),
  updateCartItem: item => dispatch(updateCartItem(item)),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId))
})

const SnackShowContainer = connect(mapStateToProps, mapDispatchToProps)(SnackShow)
export default SnackShowContainer
