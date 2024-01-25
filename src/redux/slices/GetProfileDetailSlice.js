import {createSlice} from '@reduxjs/toolkit';
import {GetProfileDetailAction} from '../action/GetProfileDetailAction';

const GetProfileDetailSlice = createSlice({
  name: 'GetProfileDetail',
  initialState: {
    user: {},
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(GetProfileDetailAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(GetProfileDetailAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data.user;
    });
    builder.addCase(GetProfileDetailAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default GetProfileDetailSlice.reducer;
