import { createSlice } from '@reduxjs/toolkit';
import { showMessage } from 'app/store/fuse/messageSlice';
import history from '@history';
import ds from '../../services/DataService';
import { createUserSettingsFirebase } from './userSlice';
import { displayPopup } from './commonData';
import { setRegisterLoader } from './loadersSlice';

export const submitRegister =
  ({ name, email, password, phoneNo, location }) =>
  async (dispatch) => {
    return ds
      .registerService({
        name,
        password,
        email,
        phoneNo,
        location,
      })
      .then((user) => {
        dispatch(setRegisterLoader(false));
        dispatch(displayPopup('Successfully register', 'success', 3000));
        history.push({
          pathname: '/login',
        });
        // dispatch(setUserData(user));
        // return dispatch(registerSuccess());
      })
      .catch((errors) => {
        dispatch(setRegisterLoader(false));
        dispatch(displayPopup('Something went wrong', 'error', 2000));
        return errors;
        // return dispatch(registerError(errors));
      });
  };

const initialState = {
  success: false,
  errors: [],
};

const registerSlice = createSlice({
  name: 'auth/register',
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.success = true;
      state.errors = [];
    },
    registerError: (state, action) => {
      state.success = false;
      state.errors = action.payload;
    },
  },
  extraReducers: {},
});

export const { registerSuccess, registerError } = registerSlice.actions;

export default registerSlice.reducer;
