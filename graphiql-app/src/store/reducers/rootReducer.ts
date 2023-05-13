import { combineReducers } from '@reduxjs/toolkit';
import authRootReducer from './authorisation/authRootReducer';

const rootReducer = combineReducers({
  auth: authRootReducer,
});

export default rootReducer;
