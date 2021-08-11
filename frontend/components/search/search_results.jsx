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

  render() {
    if (this.props.words === null) return <div>no search results</div>
    if (this.props.searchedSnacks === null) return (
      <div className='cart-spinner-div'>
        <img className='loading-indicator' src="/images/loadIndicator.gif" />
      </div>
    )
    return (
      <div className='search-results-main-div'>
        <div className='search-results-sorting-div'>
          <p>sort by price</p>
          <p>sort by rating</p>
          <p>sort by relevance</p>
        </div>
        <div className='search-results-display-div'>
          <p className='search-results-text'>{`Search results for "${this.props.words.join(' ')}"`}</p>
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
