import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchRecSnacks } from "../../actions/snack_actions"
import { recent, popular, suggested } from "../../selectors/recs"
import Home from "./home"


const mapStateToProps = state => ({
  currentUser: state.session.id,
  recs: state.entities.recs,
  recent: recent(state),
  popular: popular(state),
  suggested: suggested(state)
})

const mapDispatchToProps = dispatch => ({
  fetchRecSnacks: () => dispatch(fetchRecSnacks())
})

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
export default HomeContainer
