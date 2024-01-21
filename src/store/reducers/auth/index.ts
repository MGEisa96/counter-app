import {createSlice} from '@reduxjs/toolkit';

const state = {
  isUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    loginAction: (state) => {
      state.isUser = true;

    },
    logoutAction: (state) => {
      state.isUser = false;
    },
  },
});

export const {loginAction, logoutAction} = authSlice.actions;
export default authSlice;
