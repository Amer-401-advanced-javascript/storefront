import React from 'react';
import { connect } from 'react-redux';

import { active } from '../../store/categories';

const Products = props => {
    return(
      <h1>
          {props.products.products.map ( value => JSON.stringify(value))}fsdfddd
      </h1>
    )
}

const mapStateToProps = (state) => ({
    products: state.products
})
const mapDispatchToProps = { active }

export default connect ( mapStateToProps, mapDispatchToProps) (Products);