import * as api from '../api';

export const getProducts = () => async (dispatch) => {
  try {
    // console.log('hello');
    const { data } = await api.fetchProducts();
    console.log(data);
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
