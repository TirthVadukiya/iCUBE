import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const GetProfileDetailAction = createAsyncThunk(
  'GetProfileDetail',
  async data => {
    try {
      const response = await axios.get(`api/get_details`);

      return response.data;
    } catch (error) {
      console.log('GetProfileDetail', error);
    }
  },
);
