'use strict';

let initialState = [];


export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'INCREMENT': 
    return state.push(payload);

  default: 
    return state;
  }
};


export const increment = (item) => {
  return {
    type: 'INCREMENT',
    payload: item,
  };
};