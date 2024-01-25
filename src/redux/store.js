import {configureStore} from '@reduxjs/toolkit';
import LoginSlice from './slices/LoginSlice';
import {SignUpAction} from './action/SignUAction';
import SignupSlice from './slices/SignupSlice';
import GetProfileDetailSlice from './slices/GetProfileDetailSlice';
import UpdateProfileDetailSlice from './slices/UpdateProfileDetailSlice';

const customMiddleware = getDefaultMiddleware => {
  return getDefaultMiddleware({
    serializableCheck: false,
  });
};

export const store = configureStore({
  reducer: {
    // Login & Signup
    Auth: LoginSlice,
    AuthSignup: SignupSlice,
    GetProfileDetail: GetProfileDetailSlice,
    UpdateProfileDetail: UpdateProfileDetailSlice,
  },
  middleware: customMiddleware,
});
