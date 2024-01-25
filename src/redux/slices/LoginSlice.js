import {createSlice} from '@reduxjs/toolkit';
import {LoginAction} from '../action/LoginAction';

const LoginSlice = createSlice({
  name: 'Auth',
  initialState: {
    data: {},
    loading: false,
    error: null,
    token: null,
    isLogin: false,
  },
  reducers: {
    resetLogin: state => {
      (state.data = {}), (state.loading = false), (state.error = null);
    },
    login: state => {
      state.isLogin = true;
    },
    logout: state => {
      state.isLogin = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(LoginAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(LoginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.token =
        action.payload.data && action.payload.data.length > 0
          ? action.payload.data.token
          : null;
      state.isLogin =
        action.payload.data && action.payload.data.length > 0 ? true : false;
    });
    builder.addCase(LoginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const {resetLogin, login, logout} = LoginSlice.actions;
export default LoginSlice.reducer;
