import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  form: reduxForm
});
