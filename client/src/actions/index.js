import axios from 'axios';
import { FETCH_USER, FETCH_PRODUCTS } from './types';

export const createUser = values => async dispatch => {
  const res = await axios.post('/api/signup', values);
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const fetchUser = values => async dispatch => {
  const res = await axios.get('/api/current_user', values);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginUser = values => async dispatch => {
  const res = await axios.post('/api/login', values);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/api/products');
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const createProduct = values => async dispatch => {
  const res = await axios.post('/api/products', values);
  dispatch({ type: null, payload: res.data });
};

export const deleteProduct = id => async dispatch => {
  const res = await axios.delete(`/api/products/${id}`);
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
