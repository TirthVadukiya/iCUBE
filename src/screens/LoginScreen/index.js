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
  },
  AppLogoView: {
    alignItems: 'center',
    top: 15,
    flexDirection: 'column',
  },
  LoginTxtView: {
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 20,
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
    alignItems:"center",
    justifyContent:'center',
    borderRadius:10, marginHorizontal: 30,
  },
});

export default styles;
