import React from 'react'
import Slider from './slider'

export default class Home extends React.Component {
  componentDidMount() {
    this.props.fetchRecSnacks()
  }

  render() {
    return (
      <div className='home-main-div'>
        <Slider />
        <div className='home-recs-div'>
          <div className='home-recent-div'>
            DIV1
          </div>
          <div className='home-popular-div'>
            DIV2
          </div>
          <div className='home-suggested-div'>
            DIV3
          </div>
        </div>
      </div>
    )
  }
}
