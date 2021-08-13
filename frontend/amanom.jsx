import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

import { fetchSnack } from './actions/snack_actions'
import { fetchCartItems } from './actions/item_actions'
import { fetchPopularSnacks, fetchSearchedSnacks } from './utils/snack_utils'
import { fetchSnackReviews } from './actions/review_actions'

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

  window.store = store
  window.dispatch = store.dispatch
  window.getState = store.getState
  window.fetchSnack = fetchSnack
  window.fetchSearchedSnacks = fetchSearchedSnacks
  window.fetchSnackReviews = fetchSnackReviews
  window.fetchPopularSnacks = fetchPopularSnacks
})
