let initialState =  [
  { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
  { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
  { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
  { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
  { name: 'Apples', category: 'food', price: .99, inStock: 500 },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  { name: 'Milk', category: 'food', price: 2.39, inStock: 0 },
];


export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type){
  case 'ACTIVE':
  { console.log(state, initialState);
  
    state = [...initialState];
  
    return state.filter(value=> {
      if(value.inStock){   
        return value.category === payload;
      }
    });    
  }

  case 'ADD_TO_CART':
  {   
    console.log('initi', initialState);
    
    let itemCollection =  state.map( item => {
      if((item.name === payload.name) && (item.inStock > 0)){
        item.inStock--;
        return item;
      } else{        
        return item;
      }
    });
    return itemCollection;
    
  }

  default:
    return [];
  }
};

export const addtoCart = (item) => {
  console.log(item,'this the added item');
  
  return {
    type:'ADD_TO_CART',
    payload:item,
  };
};