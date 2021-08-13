import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../utils/route_utils'
import { CategoriesBar } from './categories_bar/categories_bar'
import Home from './home/home'
import NavBarContainer from './nav_bar/nav_bar_container'
import CartContainer from './order/cart_container'
import SearchResultsContainer from './search/search_results_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import SnackShowContainer from './snack/snack_show_container'

const App = () => (
  <div className='main-div'>
    <header className='main-header'>
      <NavBarContainer />
      <CategoriesBar />
    </header>
    <div className='main-body'>
      <Switch>
        <Route exact path='/' component={Home} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <Route exact path='/cart' component={CartContainer} />
        <Route exact path='/search' component={SearchResultsContainer} />
        <Route exact path='/snacks/:snackId' component={SnackShowContainer} />
        {/* <Route path='/snacks/' render={() => <Redirect to={{pathname: "/"}} />} /> */}
        {/* <Route render={() => <Redirect to={{pathname: "/"}} />} /> */}
        {/* <Redirect from='/snacks/*' to='/' /> */}
        <Redirect to='/' />
      </Switch>
    </div>
  </div>
)

export default App
