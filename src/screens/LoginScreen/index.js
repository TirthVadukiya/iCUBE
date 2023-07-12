import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  AppLogoView: {
    alignItems: 'center',
    flexDirection: 'column',
    margin:15,
  },
  AppLogoImg: {
    
    height: 54,
    width: 200,
  },
  LoginTxtView: {
    flexDirection: 'column',
    alignItems: 'center',top:50
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
    marginHorizontal: 25,height:45,
    margin: 10,marginTop:80
  },
  txtInput: {
    width: '100%',
    padding: 10,
    color: 'black',
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Raleway-Regular"
  },
  LoginBtn: {
    backgroundColor: '#EC581F',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 25,marginTop:15
  },
  LoginTxt: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '700',
    fontFamily: 'Raleway-Bold',
  },
 
  footerTxt1: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.black,
    fontFamily: 'Raleway-Regular',
  },
  footerTxt2: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.black,
    fontFamily: 'Raleway-Regular',
   
  },

  LoginImg : {
    height: 110,
    width:  "100%",
   
  }
});

export default styles;