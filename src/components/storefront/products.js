import React from 'react';
import { connect } from 'react-redux';

import { active } from '../../store/categories';

const Products = props => {
    return(
      <ul>
           {props.products.products.map ( value => 
            <li key = {value.name}>
                <p>Name: {value.name}</p>
                <p> Category: {value.category}</p>
                <p>Price: {value.price} </p>
                <p>inStock: {value.inStock}</p>
            </li>
            )}
      </ul>
    )
        }
         

const mapStateToProps = (state) => ({
    products: state.products
})
const mapDispatchToProps = { active }

export default connect ( mapStateToProps, mapDispatchToProps) (Products);