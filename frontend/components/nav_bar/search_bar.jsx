import React from 'react'
import { Link } from 'react-router-dom'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ''
    }
  }

  handleInput = e => {
    this.setState({searchString: e.target.value})
  }

  handleFocus = e => {
    document.querySelector('.search-bar-div').focus()
  }

  render() {
    return (
      <div className='search-bar-div'>
        <input className='search-bar-input' type="text" onChange={this.handleInput} onFocus={this.handleFocus}/>
        <Link className='search-bar-submit' to={{pathname: "/search", data: this.state}}>
          <img className='search-bar-img' src="/images/search.png"/>
        </Link>
      </div>
    )
  }
}
