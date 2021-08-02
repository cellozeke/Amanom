import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute } from '../utils/route_utils'
import NavBarContainer from './nav_bar/nav_bar_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'

const App = () => (
  <div>
    <header>
      <h1>Welcome to Amanom!</h1>
      <NavBarContainer />
    </header>
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
  </div>
)

export default App
