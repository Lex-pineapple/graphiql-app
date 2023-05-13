import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import loginReducer from './loginReducer';

const authRootReducer = combineReducers({
  authInfo: authReducer,
  login: loginReducer,
});

export default authRootReducer;
