import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


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
  }

  handleClear = e => {
    e.preventDefault()
    this.setState({
      // field: 'relevance',
      // direction: 'descending',
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
        <div className='search-results-sort-div'>
          <p className="search-results-sort-header">Sort by: </p>
          <FormControl component="sort-set">
            <RadioGroup defaultValue="relevance" >
              <FormControlLabel className='search-results-radio' onClick={this.handleField} value="relevance" control={<Radio />} label="Relevance" />
              <FormControlLabel className='search-results-radio' onClick={this.handleField} value="price" control={<Radio />} label="Price" />
              <FormControlLabel className='search-results-radio' onClick={this.handleField} value="rating" control={<Radio />} label="Rating" />
              <FormControlLabel className='search-results-radio' onClick={this.handleField} value="numReviews" control={<Radio />} label="Reviews" />
            </RadioGroup>
          </FormControl>
          <br />
          <FormControl component="sort-direction">
            <RadioGroup defaultValue="descending" >
              <FormControlLabel className='search-results-radio' onClick={this.handleDirection} value="descending" control={<Radio />} label="Descending" />
              <FormControlLabel className='search-results-radio' onClick={this.handleDirection} value="ascending" control={<Radio />} label="Ascending" />
            </RadioGroup>
          </FormControl>

          <div className='search-results-sort-divider'></div>

          <p className="search-results-sort-header">Filter by: </p>
          <p className="search-results-sort-subheader">Price</p>
          <div className='search-results-min-max'>
            <p className='search-results-filter-dollar'>$</p>
            <input className='search-results-filter-input' onChange={this.handleChange('minPrice')} type="text" value={this.state.minPrice}/>
            <p className='search-results-filter-dash'>-</p>
            <p className='search-results-filter-dollar'>$</p>
            <input className='search-results-filter-input' onChange={this.handleChange('maxPrice')} type="text" value={this.state.maxPrice}/>
          </div>
          <p className="search-results-sort-subheader">Rating</p>
          <div className='search-results-min-max'>
            <input className='search-results-filter-input' onChange={this.handleChange('minRating')} type="text" value={this.state.minRating}/>
            <p className='search-results-filter-dash'>-</p>
            <input className='search-results-filter-input' onChange={this.handleChange('maxRating')} type="text" value={this.state.maxRating}/>
          </div>
          <button className='search-results-clear-button button' onClick={this.handleClear}>Clear filters</button>
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
