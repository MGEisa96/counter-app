import {configureStore} from '@reduxjs/toolkit';
import {authReducer, counterReducer} from './reducers';
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';

export const store: ToolkitStore = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
