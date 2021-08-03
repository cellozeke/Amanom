import { receiveSessionErrors, signUp } from "../../actions/session_actions"
import { connect } from "react-redux"
import SignupForm from "./signup_form"

const mapStateToProps = state => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors))
})

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm)
export default SignupFormContainer
