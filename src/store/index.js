import { combineReducers, createStore } from 'redux';

import categories from './categories';
import products from './products';
import cart from './cart';

let reducer = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(reducer);
};

export default store();