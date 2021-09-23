import React from 'react'
import SnackReviewEditForm from './snack_review_edit_form'

export default class SnackReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleClick = e => {
    this.setState({editing: true})
  }

  render() {
    const { review } = this.props
    console.log(review)

    if (this.state.editing) return (
      <SnackReviewEditForm review={review} updateSnackReview={this.props.updateSnackReview} fetchSnack={this.props.fetchSnack} snackId={this.props.snackId}/>
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
