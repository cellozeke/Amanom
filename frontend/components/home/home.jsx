import React from 'react'
import Slider from './slider'

export default class Home extends React.Component {
  componentDidMount() {
    this.props.fetchRecSnacks()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) this.props.fetchRecSnacks()
  }

  handleClick = snackId => e => {
    e.preventDefault()
    this.props.history.push(`/snacks/${snackId}`)
  }

  render() {
    if (!this.props.recs) return (
      <div className='cart-spinner-div'>
        <img className='loading-indicator' src="/images/loadIndicator.gif" />
      </div>
    )

    let { recent, popular, suggested } = this.props

    return (
      <div className='home-main-div'>
        <Slider />
        <div className='home-recs-div'>
          <div className='home-recent-div'>
            <p className='home-recs-header'>Recently Purchased</p>
            {recent.length ? 
              <div className='home-recs-grid'>
                {recent.map(snack => <img className='home-recs-pic' src={snack.photoUrl} key={snack.id} onClick={this.handleClick(snack.id)} />)}
              </div> :
              <p>No order history</p>
            }
          </div>
          <div className='home-popular-div'>
            <p className='home-recs-header'>Best Sellers</p>
            <div className='home-recs-grid'>
              {popular.map(snack => <img className='home-recs-pic' src={snack.photoUrl} key={snack.id} onClick={this.handleClick(snack.id)} />)}
            </div>
          </div>
          <div className='home-suggested-div'>
            <p className='home-recs-header'>Recommended For You</p>
            <div className='home-recs-grid'>
              {suggested.map(snack => <img className='home-recs-pic' src={snack.photoUrl} key={snack.id} onClick={this.handleClick(snack.id)} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
