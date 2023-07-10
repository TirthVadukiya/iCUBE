import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  TopImage : {
    height: Dimensions.get("window").height / 5.2,
    width: Dimensions.get ("window"). width,
  },
  AppLogoView: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:165,
    margin:15
  },
  AppLogoImg: {
    
    height: Dimensions.get("window"). height / 12.6,
    width: Dimensions.get("window").width / 1.6,
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
    marginHorizontal: 25,height:45,
    margin: 10,marginTop:20
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
    height:Dimensions.get("window").height / 1,
    width: Dimensions.get("window").width ,
   
  }
});

export default styles;