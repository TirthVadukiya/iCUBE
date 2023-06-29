import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  LoginTopImg: {
    height: 168,
    width: 430,
    bottom: 20,
  },
  AppLogoView: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  AppLogoImg: {
    bottom: 20,
    height: 62,
    width: 235,
  },
  LoginTxtView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  LoginTxt1: {
    color: '#EC581F',
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
  },
  LoginTxt2: {
    color: '#727270',
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
  },
  viewTextInput: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    marginHorizontal: 25,
    margin: 10,
  },
  txtInput: {
    width: '100%',
    padding: 10,
    color: 'black',
  },
  LoginBtn: {
    backgroundColor: '#EC581F',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 30,
  },
  LoginTxt: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '700',
    fontFamily: 'Raleway-Bold',
  },
  footerImg: {
    height: 231,
    width: 431,
    right: 30,
  },
  footerCarImg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 30,
  },
  footerTxtView: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 20,
  },
  footerTxt1: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFF',
    fontFamily: 'Raleway-Regular',
  },
  footerTxt2: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFF',
    fontFamily: 'Raleway-Regular',
  },
});

export default styles;
