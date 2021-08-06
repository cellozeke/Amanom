import { connect } from "react-redux"
import { fetchSnack } from "../../actions/snack_actions"
import SnackShow from "./snack_show"

const mapStateToProps = (state, ownProps) => ({
  snack: state.entities.snacks[ownProps.match.params.snackId]
})

const mapDispatchToProps = dispatch => ({
  fetchSnack: snackId => dispatch(fetchSnack(snackId))
})

const SnackShowContainer = connect(mapStateToProps, mapDispatchToProps)(SnackShow)
export default SnackShowContainer
