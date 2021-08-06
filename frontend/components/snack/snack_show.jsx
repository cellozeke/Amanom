import React from 'react'

export default class SnackShow extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = this.props.snack
  // }

  componentDidMount() {
    this.props.fetchSnack(this.props.match.params.snackId)
  }

  render() {
    console.log(this.props.snack)
    const { snack } = this.props
    if (snack) return (
      <div>
        {snack.id}
        {snack.name}
        {snack.description}
        {snack.price}
        {snack.rating || 0}
      </div>
    );
    return null
  }
}

