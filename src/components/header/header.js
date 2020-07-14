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
  cartItems: state.cart
});

export default connect (mapPropsToState) (Header);