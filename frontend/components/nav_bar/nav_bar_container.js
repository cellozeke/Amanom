import { logOut } from "../../actions/session_actions"
import { connect } from "react-redux"
import NavBar from "./nav_bar"
import { withRouter } from "react-router-dom"
import { getCartItems, isCartDataReady } from "../../selectors/cart"
import { fetchSnackNames } from "../../actions/snack_actions"

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  cartItems: getCartItems(state),
  isCartDataReady: isCartDataReady(state),
  names: state.entities.names
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  fetchSnackNames: () => dispatch(fetchSnackNames())
})

const NavBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
export default NavBarContainer
