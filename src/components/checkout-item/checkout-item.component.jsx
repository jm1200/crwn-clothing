import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import {
  addItemToCart,
  removeItemFromCart
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
