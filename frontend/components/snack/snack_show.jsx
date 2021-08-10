import React from 'react'
import { moneyFormatter } from '../../utils/extra_utils';
import SnackOrderItem from './snack_order_item';

export default class SnackShow extends React.Component {
  componentDidMount() {
    this.props.fetchSnack(this.props.match.params.snackId)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) this.props.fetchSnack(this.props.match.params.snackId)
  }

  componentWillUnmount() {
    this.props.refreshCartItems()
  }

  render() {
    const { snack, cartItem, isCartDataReady, createCartItem, updateCartItem, deleteCartItem } = this.props
    if (!isCartDataReady) return (
      <div className='snack-show-spinner-div'>
        <img className='loading-indicator' src="/images/loadIndicator.gif" />
      </div>
    )
    if (snack) return (
      <div className='snack-show-div'>
        <div className='snack-show-main-div'>
          <div className='snack-show-pic-div'>
            <img className='snack-show-pic-img' src={snack.photoUrl} />
          </div>
          <div className='snack-show-details-div'>
            <div className='snack-show-details-name'>
              {snack.name}
              <p className='snack-show-details-seller'>by AmanomFresh</p>
            </div>
            <div className='snack-show-details-rating-div'>
              <p className='snack-show-details-rating-stars'>(Insert {snack.rating || 0} stars here)</p>
              <a className='snack-show-deatils-rating-count' href="/">(Insert # of ratings here)</a>
            </div>
            <div className='snack-show-details-price-div'>
              <p>Price: </p>
              <p className='snack-show-details-price'>{moneyFormatter.format(snack.price / 100)}</p>
            </div>
            <div className='snack-show-details-description-div'>
              <p>Product Details</p>
              <ul className='snack-show-details-description-bullets'>
                <li>{snack.description}</li>
                <li>100% satisfaction guaranteed ✅</li>
                <li>Lowest price on Amanom 💰</li>
                <li>Free shipping 🚚</li>
                <li>Great for parties 🎉</li>
                <li>Perfect for late-night snacking 😪</li>
                <li>Share with your friends 👫</li>
              </ul>
            </div>
          </div>
          <SnackOrderItem snack={snack} cartItem={cartItem} createCartItem={createCartItem} updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} />
        </div>
      </div>
    )
    return null
  }
}
