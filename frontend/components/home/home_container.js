import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchRecSnacks } from "../../actions/snack_actions"
import Home from "./home"


const mapStateToProps = state => ({
  recs: state.entities.recs
})

const mapDispatchToProps = dispatch => ({
  fetchRecSnacks: () => dispatch(fetchRecSnacks())
})

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
export default HomeContainer
