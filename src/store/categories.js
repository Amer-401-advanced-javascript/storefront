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
    let categories = state.categories;
    let activeCategory = state.activeCategory;
    activeCategory = payload;
    return {categories, activeCategory}; 
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
