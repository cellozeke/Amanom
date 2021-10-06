import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ''
    }
  }

  handleInput = e => {
    this.setState({searchString: e.target.value.toLowerCase()})
  }

  handleClick = id => e => {
    e.preventDefault()
    this.props.history.push(`/snacks/${id}`)
  }

  handleFocus = e => {
    e.preventDefault()
    let dropdown = document.querySelector('.search-bar-dropdown')
    setTimeout(() => {
      dropdown.classList.remove('dropdown-hidden')
      dropdown.classList.add('dropdown-visible')
    }, 100)
  }

  handleBlur = e => {
    e.preventDefault()
    let dropdown = document.querySelector('.search-bar-dropdown')
    setTimeout(() => {
      dropdown.classList.remove('dropdown-visible')
      dropdown.classList.add('dropdown-hidden')
    }, 100)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push({pathname: '/search', search: `?q=${this.state.searchString}`})
  }

  render() {
    let { suggestions } = this.props
    let filteredSuggestions = suggestions.filter(suggestion => suggestion.name.toLowerCase().includes(this.state.searchString))
    return (
      <form className='search-bar-form'>
        <input className='search-bar-input' type="text" list='datalist' onChange={this.handleInput} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        <div className='search-bar-dropdown dropdown-hidden'>
          {filteredSuggestions.map(suggestion => <p className='search-bar-suggestion' value={suggestion.name} key={suggestion.name} onClick={this.handleClick(suggestion.id)}>{suggestion.name}</p>)}
        </div>
        {/* <datalist className='search-bar-datalist' id='datalist'>
          {names.map(name => <option value={name} key={name}></option>)}
        </datalist> */}
        <button className='search-bar-submit' onClick={this.handleSubmit}>
          <input className='search-bar-img' type="image" src="/images/search.png" onSubmit={this.handleSubmit}/>
        </button>
      </form>
    )
  }
}
