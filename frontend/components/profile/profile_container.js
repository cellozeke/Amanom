import Profile from "./profile"
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  // orders: state.entities.orders || [],
  orders: state.entities.orders === null ? null : [...state.entities.orders],
  reviews: state.entities.reviews || []
})

const mapDispatchToProps = dispatch => ({

})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer
