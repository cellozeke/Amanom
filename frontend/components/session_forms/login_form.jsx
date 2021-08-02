import React from "react";

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

  handleSubmit = e => {
    e.preventDefault()
    (/\A[a-zA-Z0-9]+\z/).test(this.state.usernameOrEmail) ? this.state.username = this.state.usernameOrEmail : this.state.email = this.state.usernameOrEmail
    this.props.logIn(this.state)
  }

  handleInput = field => e => {
    this.setState({[field]: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username or Email: 
            <input type="text" value={this.state.usernameOrEmail} onChange={this.handleInput('usernameOrEmail')} />
          </label>
          <label>Password: 
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <input type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}
