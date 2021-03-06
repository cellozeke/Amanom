import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../utils/route_utils'
import { CategoriesBar } from './categories_bar/categories_bar'
import HomeContainer from './home/home_container'
import Footer from './nav_bar/footer'
import NavBarContainer from './nav_bar/nav_bar_container'
import CartContainer from './order/cart_container'
import ProfileContainer from './profile/profile_container'
import SearchResultsContainer from './search/search_results_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import SnackShowContainer from './snack/snack_show_container'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: [
      'amazonEmber'
    ]
  },
  palette: {
    primary: {
      main: orange[500]
    }
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <div className='main-div'>
      <header className='main-header'>
        <NavBarContainer />
        <CategoriesBar />
      </header>
      <div className='main-body'>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <Route exact path='/profile' component={ProfileContainer} />
          <Route exact path='/cart' component={CartContainer} />
          <Route exact path='/search' component={SearchResultsContainer} />
          <Route exact path='/snacks/:snackId' component={SnackShowContainer} />
          {/* <Route path='/snacks/' render={() => <Redirect to={{pathname: "/"}} />} /> */}
          {/* <Route render={() => <Redirect to={{pathname: "/"}} />} /> */}
          {/* <Redirect from='/snacks/*' to='/' /> */}
          <Redirect to='/' />
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  </ThemeProvider>
)

export default App
