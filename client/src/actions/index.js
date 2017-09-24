import axios from 'axios';
import { CREATE_USER } from './types';

export const createUser = values => async dispatch => {
  const res = await axios.post('/api/signup', values);
  dispatch({ type: CREATE_USER, payload: res.data });
};
