import { logIn, receiveSessionErrors } from "../../actions/session_actions"
import { connect } from "react-redux"
import LoginForm from "./login_form"
import { withRouter } from "react-router-dom"

const mapStateToProps = state => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user)),
  receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors))
})

const LoginFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
export default LoginFormContainer
