import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      field: 'relevance',
      direction: 'descending',
      minPrice: '',
      maxPrice: '',
      minRating: '',
      maxRating: '',
      // inputWarnings: [],
      // canFilter: true
    }
  }

  componentDidMount() {
    this.props.refreshSearchedSnacks()
    this.props.fetchSearchedSnacks(this.props.words)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      this.props.refreshSearchedSnacks()
      this.props.fetchSearchedSnacks(this.props.words)
      this.setState({
        field: 'relevance',
        direction: 'descending',
        minPrice: '',
        maxPrice: '',
        minRating: '',
        maxRating: ''
      })
    }
  }

  handleField = e => {
    this.setState({field: e.target.value})
  }

  handleDirection = e => {
    this.setState({direction: e.target.value})
  }

  handleChange = field => e => {
    this.setState({[field]: e.target.value})
    // let warnings = []
    // if (!+this.state.minPrice && !['0', ''].includes(this.state.minPrice)) warnings.push('Invalid min price')
    // if (!+this.state.maxPrice && !['0', ''].includes(this.state.maxPrice)) warnings.push('Invalid max price')
    // if (!+this.state.minRating && !['0', ''].includes(this.state.minRating)) warnings.push('Invalid min rating')
    // if (!+this.state.maxRating && !['0', ''].includes(this.state.maxRating)) warnings.push('Invalid max rating')
    // this.setState({inputWarnings: warnings})
  }

  handleClear = e => {
    e.preventDefault()
    this.setState({
      field: 'relevance',
      direction: 'descending',
      minPrice: '',
      maxPrice: '',
      minRating: '',
      maxRating: ''
    })
  }

  render() {
    // if (this.props.words === null) return <div>no search results</div>
    if (this.props.searchedSnacks === null) return (
      <div className='cart-spinner-div'>
        <img className='loading-indicator' src="/images/loadIndicator.gif" />
      </div>
    )

    let filteredSnacks = this.props.searchedSnacks.filter(snack =>
      (this.state.minPrice === '' || (snack.price / 100) >= this.state.minPrice)
      && (this.state.maxPrice === '' || (snack.price / 100) <= this.state.maxPrice)
      && (this.state.minRating === '' || snack.rating >= this.state.minRating)
      && (this.state.maxRating === '' || snack.rating <= this.state.maxRating)
    )
    let sortedSnacks = this.state.direction === 'descending' ? filteredSnacks.sort((a, b) => b[this.state.field] - a[this.state.field]) : filteredSnacks.sort((a, b) => a[this.state.field] - b[this.state.field])
    let numResults = sortedSnacks.length

    return (
      <div className='search-results-main-div'>
        <div className='search-results-sorting-div'>
          <p>Sort by: </p>
          <label>Relevance
            <input onClick={this.handleField} type="radio" name="sort" id="relevance" value="relevance" defaultChecked/>
          </label>
          <label>Price
            <input onClick={this.handleField} type="radio" name="sort" id="price" value="price"/>
          </label>
          <label>Rating
            <input onClick={this.handleField} type="radio" name="sort" id="rating" value="rating"/>
          </label>
          <label>Reviews
            <input onClick={this.handleField} type="radio" name="sort" id="reviews" value="numReviews"/>
          </label>
          <br />
          <label>Descending
            <input onClick={this.handleDirection} type="radio" name="direction" id="descending" value='descending' defaultChecked/>
          </label>
          <label>Ascending
            <input onClick={this.handleDirection} type="radio" name="direction" id="ascending" value='ascending'/>
          </label>
          <br />
          <p>Filter by: </p>
          <div>
            <p>Price</p>
            <p>Min</p>
            $<input onChange={this.handleChange('minPrice')} type="text" value={this.state.minPrice}/>
            <p>Max</p>
            $<input onChange={this.handleChange('maxPrice')} type="text" value={this.state.maxPrice}/>
          </div>
          <div>
            <p>Rating</p>
            <p>Min</p>
            <input onChange={this.handleChange('minRating')} type="text" value={this.state.minRating}/>
            <p>Max</p>
            <input onChange={this.handleChange('maxRating')} type="text" value={this.state.maxRating}/>
          </div>
          <button onClick={this.handleClear}>Clear filters</button>
          {/* <p>{this.state.inputWarnings}</p> */}
          {/* <button onClick={this.handleFilter}>Filter</button> */}

        </div>
        <div className='search-results-display-div'>
          <p className='search-results-text'>{`Showing ${numResults} result${numResults > 1 || !numResults ? 's' : ''} for "${this.props.words.join(' ')}"`}</p>
          <div className='search-results-display-item-div'>
            {sortedSnacks.map(snack =>
                <div className='search-results-display-item' key={snack.id}>
                  <Link className='search-results-display-item-img-div' to={`/snacks/${snack.id}`}>
                    <img className='search-results-display-item-img' src={snack.photoUrl} />
                  </Link>
                  <Link className='search-results-display-item-name' to={`/snacks/${snack.id}`}>{snack.name}</Link>
                  <div className='search-results-display-item-rating stars' style={{'--rating': `${snack.rating}`}} ></div>
                  <div className='search-results-display-item-price'>Price: 
                    <p className='search-results-display-item-price-amount'>{moneyFormatter.format(snack.price / 100)}</p>
                  </div>
                  <p className='search-results-display-item-availability'>In Stock</p>
                  <p className='search-results-display-item-delivery'>FREE 24-hour delivery</p>
                </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
