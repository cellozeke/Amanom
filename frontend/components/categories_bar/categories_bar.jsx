import React from 'react'
import { Link } from 'react-router-dom'

export const CategoriesBar = (props) => (
  <div className='categories-bar-main-div'>
    <Link to='/search?q='>All</Link>
    <Link to='/search?q=cookies'>Cookies</Link>

  </div>
)
