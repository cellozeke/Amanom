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

        </div>
        <div className='search-results-display-div'>
          {this.props.searchedSnacks.map(snack =>
              <div className='search-results-display-item'>
                <img src={snack.photoUrl} />
                {snack.name}
              </div>
          )}
        </div>
        {this.props.searchedSnacks.map(snack => snack.name)}
      </div>
    )
  }
}
