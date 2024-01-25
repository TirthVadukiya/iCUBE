import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const GetProfileDetailAction = createAsyncThunk(
  'GetProfileDetail',
  async city_id => {
    try {
      const response = await axios.get(`api/get_details`);

      return response.data;
    } catch (error) {
      console.log('GetProfileDetail', error);
    }
  },
);
