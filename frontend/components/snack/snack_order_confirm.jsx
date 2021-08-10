import React from 'react'

export default class SnackOrderConfirm extends React.Component {
  constructor(props) {
    super(props)
    this.change = this.props.getCartChange
  }

  componentDidMount(props) {
    // console.log(props)
  }

  render() {
    console.log(this.change)
    if (this.change === null) return null
    if (this.change === 0) return (
      <div>
        <img src="images/warning.png" />
        <p>No change</p>
      </div>
    )
    if (this.change > 0) return (
      <div>
        <img src="images/check.png" />
        <p>Added</p>
      </div>
    )
    if (this.change < 0) return (
      <div>
        <img src="images/removed.png" />
        <p>Removed</p>
      </div>
    )
  }
}
