import React from 'react'

export default class SearchResults extends React.Component {

  render() {
    console.log(this.props.words)


    if (this.props.words === null) return <div>no search results</div>
    return <div>hi</div>
  }
}

