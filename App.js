import {View, Text, SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';

import {Provider} from 'react-redux';
import MainNavigate from './src/navigation/MainNavigate';
import axios from 'axios';
import {API_URL} from '@env';
import COLORS from './assets/colors/colors';
import {store} from './src/redux/store';
axios.defaults.baseURL = `${API_URL}`;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...COLORS,
    },
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{flex: 1}}>
          <Provider store={store}>
            <MainNavigate />
          </Provider>
        </SafeAreaView>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
