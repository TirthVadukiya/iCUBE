import {createSlice} from '@reduxjs/toolkit';
import {SignUpAction} from '../action/SignUAction';

const SignupSlice = createSlice({
  name: 'AuthSignup',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },

  reducers: {
    resetSignup: state => {
      (state.data = {}), (state.loading = false), (state.error = null);
    },
  },

  extraReducers: builder => {
    builder.addCase(SignUpAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(SignUpAction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(SignUpAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const {resetSignup} = SignupSlice.actions;
export default SignupSlice.reducer;
