import React from "react";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  handleInput = field => e => {
    this.setState({[field]: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: 
            <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
          </label>
          <label>Email: 
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label>Password: 
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}
