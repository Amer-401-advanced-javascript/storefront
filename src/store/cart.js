let initialState = [];


export default (state = initialState, action) => {
  let {type, payload} = action;
  
  
  switch(type) {
  case 'ADD_TO_CART': {
    console.log(state, 'added To Cart');
    return [...state, payload];
  }
  

  default: 
    return state;
  }
};