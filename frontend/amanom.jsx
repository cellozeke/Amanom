import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

import { sign_up, log_in, log_out } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)

  window.sign_up = sign_up
  window.log_in = log_in
  window.log_out = log_out
  window.store = store
  window.dispatch = store.dispatch
  window.getState = store.getState
})
