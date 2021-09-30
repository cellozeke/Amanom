import React from 'react'

export default class SnackReview extends React.Component {
  constructor(props) {
    super(props)
    let { review } = this.props
    this.state = {
      editing: false,
      id: review.id,
      stars: review.stars,
      title: review.title,
      body: review.body,
      userId: review.userId,
      snackId: review.snackId
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({editing: true})
  }

  handleCancel = e => {
    e.preventDefault()
    this.setState({editing: false})
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
    if (!this.state.stars) console.log('fix this')
    console.log(this.state)

    this.props.updateSnackReview(this.state)
      .then(res => this.props.fetchSnack(this.props.snackId))
      .then(res => this.setState({editing: false}))
  }

  render() {
    const { review, errors } = this.props

    if (this.state.editing) return (
      <form className='snack-review-form-main-div' onSubmit={this.handleSubmit}>
        <p className='snack-review-form-header'>Edit your review</p>
        <div className='snack-review-form-stars-div'>
          <p className={`snack-review-form-star star-1 ${this.state.stars >= 1 ? 'filled' : ''}`} id={1} onClick={this.handleStars}>★</p>
          <p className={`snack-review-form-star star-2 ${this.state.stars >= 2 ? 'filled' : ''}`} id={2} onClick={this.handleStars}>★</p>
          <p className={`snack-review-form-star star-3 ${this.state.stars >= 3 ? 'filled' : ''}`} id={3} onClick={this.handleStars}>★</p>
          <p className={`snack-review-form-star star-4 ${this.state.stars >= 4 ? 'filled' : ''}`} id={4} onClick={this.handleStars}>★</p>
          <p className={`snack-review-form-star star-5 ${this.state.stars >= 5 ? 'filled' : ''}`} id={5} onClick={this.handleStars}>★</p>
        </div>
        <input className='snack-review-form-title' onChange={this.handleChange('title')} type="text" minLength='1' maxLength='63' placeholder='Title' defaultValue={this.state.title}/>
        <textarea className='snack-review-form-body' onChange={this.handleChange('body')} type="text" minLength='1' placeholder='Body' defaultValue={this.state.body}></textarea>
        <div className='snack-review-form-errors'>
          {errors.map(error => <p className='snack-review-form-error' key={errors.indexOf(error)}>{error}</p>)}
        </div>
        <input type="submit" value="Submit" />
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
      // <SnackReviewEditForm review={review} updateSnackReview={this.props.updateSnackReview} fetchSnack={this.props.fetchSnack} snackId={this.props.snackId}/>
      // null
    )

    return (
      <div className='review-main-div'>
        <div className='review-avatar-name'>
          <div className='review-avatar-div'>
            <img className='review-avatar' src="images/pig-avatar.png" />
          </div>
          <p className='review-name'>{review.username}</p>
        </div>
        <div className='review-info'>
          <div className='review-header'>
            <p className='review-title'>{review.title}</p>
            <p className='review-datetime'>{new Date(review.updatedAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>
            {/* <p className='review-datetime'>{review.updatedAt === review.createdAt ? '' : 'updated on '}{new Date(review.updatedAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p> */}
          </div>
          <div className='review-rating stars' style={{'--rating': `${review.stars}`}} ></div>
          <p className='review-body'>{review.body}</p>
          <p className='review-edit-button' onClick={this.handleClick}>{this.props.editable ? 'Edit' : ''}</p>
          <div className='review-sub-div'>
          </div>
        </div>
      </div>
    )
  }
}
