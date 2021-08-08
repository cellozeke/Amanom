import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

import { signUp, logIn, logOut } from './actions/session_actions'
import { fetchSnack } from './actions/snack_actions'
import { fetchCartItems } from './actions/item_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  let store
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser},
      },
      session: {id: window.currentUser.id}
    }
    store = configureStore(preloadedState)
    fetchCartItems(window.currentUser.id)(store.dispatch)
    delete window.currentUser
  } else {
    store = configureStore()
  }
  ReactDOM.render(<Root store={store} />, root)

  window.signUp = signUp
  window.logIn = logIn
  window.logOut = logOut
  window.store = store
  window.dispatch = store.dispatch
  window.getState = store.getState
  window.fetchSnack = fetchSnack
})
