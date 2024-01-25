import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const SignUpAction = createAsyncThunk('AuthSignup', async ({data}) => {
  try {
    const response = await axios.post('api/register', data);
    return response.data;
  } catch (error) {
    console.log('SignUp', error);
  }
});
