import {createSlice} from '@reduxjs/toolkit';

interface stateType {
  count: number;
}
const state:stateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: state,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
    resetAction: (state) => {
      state.count = 0
    }
  },
});

export const {increment, decrement,resetAction} = counterSlice.actions;
export default counterSlice;
