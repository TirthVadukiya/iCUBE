import {createSlice} from '@reduxjs/toolkit';
import {UpdateProfileDetailAction} from '../action/UpdateProfileDetailAction';

const UpdateProfileDetailSlice = createSlice({
  name: 'UpdateProfileDetail',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {
    resetUpdateProfileDetail: state => {
      (state.data = {}), (state.loading = false), (state.error = null);
    },
  },
  extraReducers: builder => {
    builder.addCase(UpdateProfileDetailAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(UpdateProfileDetailAction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(UpdateProfileDetailAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const {resetUpdateProfileDetail} = UpdateProfileDetailSlice.actions;
export default UpdateProfileDetailSlice.reducer;
