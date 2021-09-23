import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createCartItem, deleteCartItem, updateCartItem } from "../../actions/item_actions"
import { fetchSnack } from "../../actions/snack_actions"
import { getCartItem, isCartDataReady } from "../../selectors/cart"
import { refreshCartItems } from "../../actions/item_actions"
import SnackShow from "./snack_show"
import { createSnackReview, fetchSnackReviews, updateSnackReview } from "../../actions/review_actions"
import { canReview } from "../../selectors/snack"
import { getUserReview } from "../../selectors/review"

const mapStateToProps = (state, ownProps) => ({
  snack: state.entities.snacks[ownProps.match.params.snackId],
  currentUser: state.session.id,
  cartItem: getCartItem(state, ownProps),
  isCartDataReady: isCartDataReady(state),
  canReview: canReview(state, ownProps),
  userReview: getUserReview(state, ownProps)
})

const mapDispatchToProps = dispatch => ({
  fetchSnack: snackId => dispatch(fetchSnack(snackId)),
  createCartItem: item => dispatch(createCartItem(item)),
  updateCartItem: item => dispatch(updateCartItem(item)),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId)),
  refreshCartItems: () => dispatch(refreshCartItems()),
  fetchSnackReviews: snackId => dispatch(fetchSnackReviews(snackId)),
  createSnackReview: review => dispatch(createSnackReview(review)),
  updateSnackReview: review => dispatch(updateSnackReview(review))
})

const SnackShowContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SnackShow))
export default SnackShowContainer
