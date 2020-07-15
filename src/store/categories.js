let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: '',
};


export default (state = initialState, action) => {
  let {type, payload} = action;    
  switch (type) {
  case 'ACTIVE':{
    return {...state, activeCategory:payload};
  }
    
  default: 
    return state;
  }
};

export const active = ( categoryName )=> {    
  return{
    type: 'ACTIVE',
    payload: categoryName,
  };
};
