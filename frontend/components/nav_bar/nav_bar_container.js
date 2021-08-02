import { connect } from "react-redux"
import NavBar from "./nav_bar"

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
})

const mapDispatchToProps = dispatch => ({
  log_out: () => dispatch(log_out())
})

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer
