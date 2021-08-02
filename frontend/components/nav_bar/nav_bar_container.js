import { logOut } from "../../actions/session_actions"
import { connect } from "react-redux"
import NavBar from "./nav_bar"

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer
