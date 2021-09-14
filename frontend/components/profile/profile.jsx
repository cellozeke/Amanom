import React from 'react'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'orders'
    }
  }

  render() {
    if (this.state.tab === 'orders') return (
      <div>
        
      </div>
    )
    return (
      <div>

      </div>
    )
  }
}
