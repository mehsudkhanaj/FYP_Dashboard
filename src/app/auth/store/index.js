import { combineReducers } from '@reduxjs/toolkit';
import login from './loginSlice';
import register from './registerSlice';
import user from './userSlice';
import loaders from './loadersSlice';
import common from './commonData';

const authReducers = combineReducers({
  user,
  login,
  register,
  loaders,
  common,
});

export default authReducers;
