// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';


const SimpleCart = props => {
  console.log(props.cartItems);
    
  return(
    <>
      <h1>Cart Items: </h1>
      {props.cartItems.map((ItemInTheCart,idx) =>  <li key ={ idx }>  {ItemInTheCart.name}</li>)}
    </>
  );
};


const mapStateToProps = (state) => ({
  // eslint-disable-next-line comma-dangle
  cartItems :state.cart
});

export default connect (mapStateToProps) (SimpleCart);