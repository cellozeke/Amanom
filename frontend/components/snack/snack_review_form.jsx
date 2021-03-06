import React from 'react'

export default class SnackReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: 0,
      title: '',
      body: '',
      userId: this.props.currentUser,
      snackId: this.props.snackId
    }
  }

  handleChange = field => e => {
    e.preventDefault()
    this.setState({[field]: e.target.value})
  }

  handleStars = e => {
    e.preventDefault()
    this.setState({stars: parseInt(e.target.id)})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createSnackReview(this.state)
      .then(res => this.props.fetchSnack(this.props.snackId))
  }

  render() {
    let { canReview, errors } = this.props
    if (!canReview) return null
    return (
        <form className='snack-review-form-main-div' onSubmit={this.handleSubmit}>
          <p className='snack-review-form-header'>Write a review!</p>
          <div className='snack-review-form-stars-div'>
            <p className={`snack-review-form-star star-1 ${this.state.stars >= 1 ? 'filled' : ''}`} id={1} onClick={this.handleStars}>★</p>
            <p className={`snack-review-form-star star-2 ${this.state.stars >= 2 ? 'filled' : ''}`} id={2} onClick={this.handleStars}>★</p>
            <p className={`snack-review-form-star star-3 ${this.state.stars >= 3 ? 'filled' : ''}`} id={3} onClick={this.handleStars}>★</p>
            <p className={`snack-review-form-star star-4 ${this.state.stars >= 4 ? 'filled' : ''}`} id={4} onClick={this.handleStars}>★</p>
            <p className={`snack-review-form-star star-5 ${this.state.stars >= 5 ? 'filled' : ''}`} id={5} onClick={this.handleStars}>★</p>
          </div>
          <input className='snack-review-form-title' onChange={this.handleChange('title')} type="text" minLength='1' maxLength='63' placeholder='Title'/>
          <textarea className='snack-review-form-body' onChange={this.handleChange('body')} type="text" minLength='1' placeholder='Body'></textarea>
          <div className='snack-review-form-errors'>
            {errors.map(error => <p className='snack-review-form-error' key={errors.indexOf(error)}>{error}</p>)}
          </div>
          <input className='button' type="submit" value="Submit" />
        </form>
    )
  }
}
