import React from 'react'
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../utils/extra_utils'

export default class SearchResults extends React.Component {
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

  handleRelevance = e => {
    e.preventDefault()
    this.props.sortByRelevance()
  }

  handleAscendingPrice = e => {
    e.preventDefault()
    this.props.sortByAscendingPrice()
  }

  handleDescendingPrice = e => {
    e.preventDefault()
    this.props.sortByDescendingPrice()
  }
  
  handleRating = e => {
    e.preventDefault()
    this.props.sortByRating()
  }

  handleReviews = e => {
    e.preventDefault()
    this.props.sortByReviews()
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
    return (
      <div className='search-results-main-div'>
        <div className='search-results-sorting-div'>
          <button onClick={this.handleRelevance}>sort by relevance</button>
          <button onClick={this.handleAscendingPrice}>sort by ascending price</button>
          <button onClick={this.handleDescendingPrice}>sort by descending price</button>
          <button onClick={this.handleRating}>sort by rating</button>
          <button onClick={this.handleReviews}>sort by number of reviews</button>
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
