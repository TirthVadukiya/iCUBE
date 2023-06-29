import React from "react";
import { StyleSheet} from "react-native";

const styles = StyleSheet.create ({
   main : {
    flex:1,
    backgroundColor:'white'
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
  signupView : {
    flexDirection:"column",alignItems:"center"
  },
  signupTxt : {
     color:"#EC581F",
     fontSize:25,
     fontWeight:"700",
     fontFamily:"Raleway-Bold"
  },
  signupTxt1 : {
    color:"#727270",
    fontSize:14,
    fontWeight:"400",
  },
  viewTextInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    height:45,
    width:320,marginTop:10
  },
  txtInput: {
    width: '100%',
    padding: 10,
    color: 'black',
  },
  viewTextInputAddress: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    height:80,
    width:320,marginTop:10
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
    height: 210,
    width: 390,
    top:22,
    right:20
  },
  footerCarImg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    resizeMode:"contain"
  },
  footerTxtView: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 50,
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
})

export default styles;