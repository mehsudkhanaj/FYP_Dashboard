import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboardLoader: false,
  loginLoader: false,
  registerLoader: false,
};

const invitesSlice = createSlice({
  name: 'auth/loaders',
  initialState,
  reducers: {
    setLoginLoader: (state, action) => {
      state.loginLoader = action.payload;
    },
    setDashboardLoader: (state, action) => {
      state.dashboardLoader = action.payload;
    },
    setRegisterLoader: (state, action) => {
      state.registerLoader = action.payload;
    },
    setLoadersInitial: (state, action) => initialState,
  },
  extraReducers: {},
});

export const {
  setLoginLoader,
  setDashboardLoader,
  setLoadersInitial,
  setRegisterLoader,
} = invitesSlice.actions;

export default invitesSlice.reducer;
