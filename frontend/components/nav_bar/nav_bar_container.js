import { logOut } from "../../actions/session_actions"
import { connect } from "react-redux"
import NavBar from "./nav_bar"
import { withRouter } from "react-router-dom"
import { getCartItems, isCartDataReady } from "../../selectors/cart"

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  cartItems: getCartItems(state),
  isCartDataReady: isCartDataReady(state)
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

const NavBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
export default NavBarContainer
