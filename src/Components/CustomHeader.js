import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {ICONS} from '../constants/icons';
import {IMAGES} from '../constants/images';
import COLORS from '../../assets/colors/colors';

const CustomHeader = ({navigation, icon}) => {
  return (
    <View style={styles.viewTopHeader}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={ICONS.user_image}
          style={styles.imgMenuAndNotification}
        />
      </TouchableOpacity>
      <Image style={styles.logoApp} source={ICONS.icube_logo} />
      {/* <TouchableOpacity
      onPress={() => navigation.navigate(redirect, {trainer_id: value})}> */}
      <Image source={icon} style={styles.imgAdd} />
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  viewTopHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    paddingTop: 10,
    paddingEnd: 15,
    backgroundColor: 'white',
  },
  imgMenuAndNotification: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginStart: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: COLORS.text,
  },
  logoApp: {
    width: '40%',
    height: 25,
    resizeMode: 'contain',
  },
  imgAdd: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
