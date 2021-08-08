import Cart from "./cart"
import { connect } from "react-redux"

const mapStateToProps = state => ({
  // currentUser: state.entities.users[state.session.id]
  cartItems: state.entities.cartItems
})

const mapDispatchToProps = dispatch => ({

})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer
