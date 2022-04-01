const products = (state = {products:[]}, action) => {
  if (action.type == 'FETCH_ALL') {
    return {
      ...state,
      products: action.payload,
    };
  }

  return state;
};

export default products;
