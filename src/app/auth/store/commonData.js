import { createSlice } from '@reduxjs/toolkit'
import { showMessage } from 'app/store/fuse/messageSlice'

export const displayPopup = (msg, type, duration) => dispatch => {
  dispatch(
    showMessage({
      message: msg,
      autoHideDuration: duration || 2000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      variant: type // success error info warning null
    })
  )
}

const initialState = {
  roles: [],
  dashboardData: []
}

const invitesSlice = createSlice({
  name: 'auth/common',
  initialState,
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload
    },
    setDashData: (state, action) => {
      state.dashboardData = action.payload
    },
    setCommonInitial: (state, action) => initialState
  },
  extraReducers: {}
})

export const { setRoles, setDashData, setCommonInitial } = invitesSlice.actions

export default invitesSlice.reducer
