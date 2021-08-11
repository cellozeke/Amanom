import React from 'react'

export default class SearchResults extends React.Component {
  componentDidMount() {
    this.props.fetchSearchedSnacks(this.props.words)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) this.props.fetchSearchedSnacks(this.props.words)
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
                  <div className='search-results-display-item-img-div'>
                    <img className='search-results-display-item-img' src={snack.photoUrl} />
                  </div>
                  <p className='search-results-display-item-name'>{snack.name}</p>
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
