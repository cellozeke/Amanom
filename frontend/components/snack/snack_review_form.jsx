import React from 'react'

export default class SnackReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: 0
    }
  }

  handleClick = e => {
    this.setState({stars: parseInt(e.target.id)})
  }

  render() {
    let { canReview } = this.props
    if (!canReview) return null
    return (
        <form className='snack-review-form-main-div' onSubmit={this.handleSubmit}>
          <p>Write a review!</p>
          <div className='snack-review-form-stars-div'>
            <p className={`snack-review-form-star star-1 ${this.state.stars >= 1 ? 'filled' : ''}`} id={1} onClick={this.handleClick}>★</p>
            <p className={`snack-review-form-star star-2 ${this.state.stars >= 2 ? 'filled' : ''}`} id={2} onClick={this.handleClick}>★</p>
            <p className={`snack-review-form-star star-3 ${this.state.stars >= 3 ? 'filled' : ''}`} id={3} onClick={this.handleClick}>★</p>
            <p className={`snack-review-form-star star-4 ${this.state.stars >= 4 ? 'filled' : ''}`} id={4} onClick={this.handleClick}>★</p>
            <p className={`snack-review-form-star star-5 ${this.state.stars >= 5 ? 'filled' : ''}`} id={5} onClick={this.handleClick}>★</p>
          </div>
          <input type="text" minLength='1' maxLength='63' placeholder='Title'/>
          <input type="text" minLength='1' maxLength='255' placeholder='Body'/>
        </form>
    )
  }
}
