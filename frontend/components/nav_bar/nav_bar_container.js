import { logOut } from "../../actions/session_actions"
import { connect } from "react-redux"
import NavBar from "./nav_bar"
import { withRouter } from "react-router-dom"

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  cartItems: entities.cartItems
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

const NavBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
export default NavBarContainer
