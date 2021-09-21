import React from 'react'

export default class SnackReviewForm extends React.Component {
  render() {
    let { canReview } = this.props
    return (
      <div>
        <p>{canReview ? 'hi' : 'bye'}</p>
        <p className='.Stars' style={{color: `pink`}}>★★★★★</p>
        {/* <p className='.Stars' style={--rating: 2.3}>★★★★★</p> */}
      </div>
    )
  }
}
