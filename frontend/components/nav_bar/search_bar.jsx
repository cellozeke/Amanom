import React from 'react'

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
  }

  render() {
    let { names } = this.props
    return (
      <form className='search-bar-form'>
        <input className='search-bar-input' type="text" list='datalist' onChange={this.handleInput}/>
        <datalist id='datalist'>
          {names.map(name => <option value={name}></option>)}
        </datalist>
        <button className='search-bar-submit' onClick={this.handleSubmit}>
          <input className='search-bar-img' type="image" src="/images/search.png" onSubmit={this.handleSubmit}/>
        </button>
      </form>
    )
  }
}
