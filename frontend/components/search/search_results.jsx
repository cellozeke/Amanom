import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      field: ''
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
    }
  }

  handleChange = e => {
    console.log(this.state)
    switch (e.target.value) {
      case 'relevance':
        this.props.sortByRelevance()
        return
      case 'price-ascending':
        this.props.sortByAscendingPrice()
        return
      case 'price-descending':
        this.props.sortByDescendingPrice()
        return
      case 'rating':
        this.props.sortByRating()
        return
      case 'reviews':
        this.props.sortByReviews()
        return
      default:
        return
    }
  }

  render() {
    // if (this.props.words === null) return <div>no search results</div>
    if (this.props.searchedSnacks === null) return (
      <div className='cart-spinner-div'>
        <img className='loading-indicator' src="/images/loadIndicator.gif" />
      </div>
    )

    let numResults = this.props.searchedSnacks.length
    if (!numResults) return (
      <div className='search-results-main-div'>
        <p className='search-results-none'>{`No search results for "${this.props.words.join(' ')}"`}</p>
      </div>
    )

    console.log(this.props.searchedSnacks)
    console.log(this.state.results)
    return (
      <div className='search-results-main-div'>
        <div className='search-results-sorting-div'>
          <p>Sort by: </p>
          <label htmlFor="relevance">Relevance
            <input onClick={this.handleChange} type="radio" name="sort" id="relevance" value="relevance" defaultChecked/>
          </label>
          <label htmlFor="relevance">Price ascending
            <input onClick={this.handleChange} type="radio" name="sort" id="price-ascending" value="price-ascending"/>
          </label>
          <label htmlFor="relevance">Price descending
            <input onClick={this.handleChange} type="radio" name="sort" id="price-descending" value="price-descending"/>
          </label>
          <label htmlFor="relevance">Rating
            <input onClick={this.handleChange} type="radio" name="sort" id="rating" value="rating"/>
          </label>
          <label htmlFor="relevance">Reviews
            <input onClick={this.handleChange} type="radio" name="sort" id="reviews" value="reviews"/>
          </label>
        </div>
        <div className='search-results-display-div'>
          <p className='search-results-text'>{`Showing ${numResults} result${numResults > 1 ? 's' : ''} for "${this.props.words.join(' ')}"`}</p>
          <div className='search-results-display-item-div'>
            {this.props.searchedSnacks.map(snack =>
                <div className='search-results-display-item' key={snack.id}>
                  <Link className='search-results-display-item-img-div' to={`/snacks/${snack.id}`}>
                    <img className='search-results-display-item-img' src={snack.photoUrl} />
                  </Link>
                  <Link className='search-results-display-item-name' to={`/snacks/${snack.id}`}>{snack.name}</Link>
                  <div className='search-results-display-item-price'>Price: 
                    <p className='search-results-display-item-price-amount'>{moneyFormatter.format(snack.price / 100)}</p>
                  </div>
                  <p className='search-results-display-item-availability'>In Stock</p>
                  <p className='search-results-display-item-rating'>Insert {snack.rating || 0} stars here</p>
                  <p className='search-results-display-item-delivery'>FREE 24-hour delivery</p>
                </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
