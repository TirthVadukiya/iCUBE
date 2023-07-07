import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';

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
    marginTop:165
  },
  AppLogoImg: {
    bottom: 20,
    height: 52,
    width: 200,
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
  footerImg : {
    height: Dimensions.get("window").height / 3.9,
    width: Dimensions.get("window"). width,
    marginTop:56
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

  LoginImg : {
    height:Dimensions.get("window").height / 1,
    width: Dimensions.get("window").width ,
   
  }
});

export default styles;