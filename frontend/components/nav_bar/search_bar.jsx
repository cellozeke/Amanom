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

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push({pathname: '/search', search: `?q=${this.state.searchString}`})
    // this.props.history.push({pathname: `/search?q=${this.state.searchString}`})
  }

  render() {
    // console.log(this.props.history)
    return (
      <form className='search-bar-form'>
        <input className='search-bar-input' type="text" onChange={this.handleInput}/>
        <button className='search-bar-submit' onClick={this.handleSubmit}>
          <input className='search-bar-img' type="image" src="/images/search.png" onSubmit={this.handleSubmit}/>
        </button>
        {/* <Link className='search-bar-submit' to={{pathname: '/search?q=react', data: this.state}}>
          <img className='search-bar-img' src="/images/search.png"/>
        </Link> */}
      </form>
    )
  }
}
