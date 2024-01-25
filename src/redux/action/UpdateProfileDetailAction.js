import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const UpdateProfileDetailAction = createAsyncThunk(
  'UpdateProfileDetail',
  async data => {
    try {
      const response = await axios.post('api/update', data);
      // console.warn('====>', response.data);
      return response.data;
    } catch (error) {
      console.log('UpdateProfileDetail', error);
    }
  },
);
