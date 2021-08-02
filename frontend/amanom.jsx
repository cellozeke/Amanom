import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

import { signUp, logIn, logOut } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)

  window.signUp = signUp
  window.logIn = logIn
  window.logOut = logOut
  window.store = store
  window.dispatch = store.dispatch
  window.getState = store.getState
})
