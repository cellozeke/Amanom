import React from 'react'
import { Link } from 'react-router-dom'

export const CategoriesBar = (props) => (
  <div className='categories-bar-main-div'>
    <Link to='/search?q='>All</Link>
    <Link to='/search?q=chips'>Chips</Link>
    <Link to='/search?q=chocolate%20candy'>{'Chocolate & Candy'}</Link>
    <Link to='/search?q=cookie'>Cookies</Link>
    <Link to='/search?q=cracker%20pretzel'>{'Crackers & Pretzels'}</Link>
    <Link to='/search?q=fruit%20snacks'>Fruit Snacks</Link>
    <Link to='/search?q=jerky'>Jerky</Link>
    <Link to='/search?q=popcorn'>Popcorn</Link>
    <Link to='/search?q=nut'>Nuts</Link>
  </div>
)
