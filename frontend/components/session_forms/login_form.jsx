import React from "react"
import { Link } from "react-router-dom"

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      usernameOrEmail: '',
      password: ''
    }
  }

  componentWillUnmount() {
    this.props.receiveSessionErrors([])
  }

  handleSubmit = e => {
    e.preventDefault();
    (/\A[a-zA-Z0-9_-]+\z/).test(this.state.usernameOrEmail) ? this.state.username = this.state.usernameOrEmail : this.state.email = this.state.usernameOrEmail
    this.props.logIn(this.state)
      .then(() => this.props.history.go(-1))
  }

  handleInput = field => e => {
    this.setState({[field]: e.target.value})
  }

  handleDemo = e => {
    e.preventDefault();
    const user = {username: 'Demo', email: 'demo@demo.com', password: 'hunter12'}
    this.props.logIn(user)
      .then(() => this.props.history.go(-1))
  }

  render() {
    const { errors } = this.props
    return (
      <div className='login-container'>
        <div className='login-div'>
          <h2 className='login-header'>Log In</h2>
          <form className='login-form' onSubmit={this.handleSubmit}>
            <label className='login-cred-1-text'>Username or Email
              <input className='login-cred-1-input' type="text" value={this.state.usernameOrEmail} onChange={this.handleInput('usernameOrEmail')} />
            </label>
            <label className='login-cred-2-text'>Password
              <input className='login-cred-2-input' type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <input className='login-submit' type="submit" value="Continue" />
            <p className='login-or'>or</p>
            <button className='login-demo-button' onClick={this.handleDemo}>Log in as demo user</button>
            {errors.map(error => <p className='login-error-message' key={errors.indexOf(error)}>{error}</p>)}
          </form>
        </div>
        <div className='login-signup-link-div'>
          <p className='login-signup-text'>New to Amanom?</p>
          <div className='login-signup-text-strikethrough'> </div>
          <Link className='login-signup-link' to='/signup'>Create your Amanom account</Link>
        </div>
        {/* <div className='login-signup-bottom-divider'> </div> */}
      </div>
    )
  }
}
