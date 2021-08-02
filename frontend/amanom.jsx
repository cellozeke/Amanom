import React from 'react'
import ReactDOM from 'react-dom'

import { signup, log_in, log_out } from './utils/session_api_utils'

document.addEventListener('DOMContentLoaded', () => {
  // const store = 
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to Amanom!</h1>, root)

  window.signup = signup
  window.log_in = log_in
  window.log_out = log_out
})

