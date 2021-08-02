import { logIn } from "../../actions/session_actions"
import { connect } from "react-redux"
import LoginForm from "./login_form"

const mapStateToProps = state => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user))
})

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default LoginFormContainer
