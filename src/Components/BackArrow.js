import {View, Text, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../constants/icons';

const BackArrow = () => {
  return (
    <Image
      style={{width: 25, height: 25, marginStart: 20, resizeMode: 'contain'}}
      source={ICONS.arrow_back}
    />
  );
};

export default BackArrow;
