import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../utils/route_utils'
import NavBarContainer from './nav_bar/nav_bar_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import SnackShowContainer from './snack/snack_show_container'

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <Route exact path='/snacks/:snackId' component={SnackShowContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
)

export default App
