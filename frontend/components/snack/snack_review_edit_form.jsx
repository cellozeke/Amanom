import React from 'react'

export default class SnackReviewEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.review
  }

  handleChange = field => e => {
    e.preventDefault()
    this.setState({[field]: e.target.value})
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({stars: parseInt(e.target.id)})
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.stars) console.log('fix this')
    console.log(this.state)

    this.props.updateSnackReview(this.state)
      .then(res => this.props.fetchSnack(this.props.snackId))
  }

  render() {
    return (
        <form className='snack-review-form-main-div' onSubmit={this.handleSubmit}>
          <p className='snack-review-form-header'>Edit your review</p>
          <div className='snack-review-form-stars-div'>
            <p className={`snack-review-form-star star-1 ${this.state.stars >= 1 ? 'filled' : ''}`} id={1} onClick={this.handleClick}>★</p>
            <p className={`snack-review-form-star star-2 ${this.state.stars >= 2 ? 'filled' : ''}`} id={2} onClick={this.handleClick}>★</p>
            <p className={`snack-review-form-star star-3 ${this.state.stars >= 3 ? 'filled' : ''}`} id={3} onClick={this.handleClick}>★</p>
            <p className={`snack-review-form-star star-4 ${this.state.stars >= 4 ? 'filled' : ''}`} id={4} onClick={this.handleClick}>★</p>
            <p className={`snack-review-form-star star-5 ${this.state.stars >= 5 ? 'filled' : ''}`} id={5} onClick={this.handleClick}>★</p>
          </div>
          <input className='snack-review-form-title' onChange={this.handleChange('title')} type="text" minLength='1' maxLength='63' placeholder='Title' defaultValue={this.state.title}/>
          <textarea className='snack-review-form-body' onChange={this.handleChange('body')} type="text" minLength='1' placeholder='Body' defaultValue={this.state.body}></textarea>
          <input type="submit" value="Submit" />
        </form>
    )
  }
}
