// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { active } from '../../store/categories';
import { decrement } from '../../store/products';

const Products = props => {
  console.log(props,'here is the products list............................');
  return(
    
    <ul>
      {props.products.map ( value => 
        <>
          <li key = {value.name}>
            <p>Name: {value.name}</p>
            <p> Category: {value.category}</p>
            <p>Price: {value.price} </p>
            <p>InStock: {value.inStock}</p>
          </li>
          <button onClick = {() => console.log('Add To Basket and Inrement Cart', props.decrement(value), props,';;;;;;;;;;;;;;;;;;;;;;;;;;;')}>Add to Cart</button>
          <hr></hr>
        </>,
      )}
    </ul>
  );
};
         

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {active, decrement};

export default connect ( mapStateToProps, mapDispatchToProps ) (Products);