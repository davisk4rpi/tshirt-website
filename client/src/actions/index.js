import axios from 'axios';
import { FETCH_USER } from './types';

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
