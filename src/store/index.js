import { combineReducers, createStore } from 'redux';

import categories from './categories';
import products from './products';

let reducer = combineReducers({ categories,products });

const store = () => {
  return createStore(reducer);
};

export default store();