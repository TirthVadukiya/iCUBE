import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const LoginAction = createAsyncThunk(
  'Auth',
  async ({mobile_no, type}) => {
    let data = new FormData();
    data.append('mobile_no', mobile_no);
    data.append('type', type);

    try {
      const response = await axios.post('api/login', data);
      if (response.data.message === 'User logged in successfully') {
        const token = response.data.data.token;
        await AsyncStorage.setItem('token', token);
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
      }

      return response.data;
    } catch (error) {
      console.log('Login', error);
    }
  },
);
