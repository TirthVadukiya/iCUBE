import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerImg: {
    resizeMode: 'cover',
    height: 200,
    width: '100%',
  },
  backBtn: {
    right: 28,
  },
  arrowBackBtn: {
    resizeMode: 'center',

    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBarTxt: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    fontFamily: 'Raleway-Bold',
    right: 8,
  },
  profileImg: {
    resizeMode: 'contain',
    height: 70,
    width: 70,
  },
  userNameTxt: {
    fontSize: 24,
    color: '#727270',
    fontWeight: '600',
    fontFamily: 'Raleway-Light',
  },
  profileImg: {
    resizeMode: 'contain',
    height: 70,
    width: 70,
  },
  txtInput: {
    width: '100%',
    height: 45,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Lato-Semibold',
    paddingHorizontal: 10,
    // marginTop: 10,
    color: '#000',
    // marginStart: 10,
    // marginEnd: 20,
  },
  txtAnnInput: {
    width: '100%',
    height: 100,
    borderColor: '#D6D6D6',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Lato-Semibold',
    // marginTop: 20,
    color: '#000',
    alignItems: 'flex-start',
    textAlign: 'left',
    textAlignVertical: Platform.OS == 'android' ? 'top' : 'auto',
  },
  updateBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#EC581F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    fontSize: 14,
  },
  updateTxt: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Raleway-Regular',
    color: '#fff',
  },
});

export default styles;
