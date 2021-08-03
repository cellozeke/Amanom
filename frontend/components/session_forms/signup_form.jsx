import React from "react"
import { Link } from "react-router-dom"

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  componentWillUnmount() {
    this.props.receiveSessionErrors([])
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  handleInput = field => e => {
    this.setState({[field]: e.target.value})
  }

  render() {
    const { errors } = this.props
    return (
      <div className='signup-container'>
        <div className='signup-div'>
          <h2 className='signup-header'>Create Account</h2>
          <form className='signup-form' onSubmit={this.handleSubmit}>
            <label className='signup-cred-1-text'>Username
              <input className='signup-cred-1-input' type="text" value={this.state.username} onChange={this.handleInput('username')} />
            </label>
            <label className='signup-cred-2-text'>Email
              <input className='signup-cred-2-input' type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>
            <label className='signup-cred-3-text'>Password
              <input className='signup-cred-3-input' type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <input className='signup-submit' type="submit" value="Create your Amanom account" />
            {errors.map(error => <p className='signup-error-message' key={errors.indexOf(error)}>{error}</p>)}
          </form>
        </div>
        <div className='signup-login-link-div'>
          <p className='signup-login-text'>Already have an account?</p>
          <div className='signup-login-text-strikethrough'> </div>
          <Link className='signup-login-link' to='/login'>Log In</Link>
        </div>
        {/* <div className='signup-login-bottom-divider'> </div> */}
      </div>
    )
  }
}
