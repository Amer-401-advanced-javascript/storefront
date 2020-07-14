// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';


function Header (props) {
  return(
    <header>
      <h1>
         Store Front
      </h1>
      <p>Cart ({props.cartItems.length})</p>
    </header>
  );
}

const mapPropsToState = (state) => ({
  // eslint-disable-next-line comma-dangle
  cartItems: state.cart
});

export default connect (mapPropsToState) (Header);