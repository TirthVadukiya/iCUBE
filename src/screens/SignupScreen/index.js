import React from "react";
import { StyleSheet,Dimensions} from "react-native";
import COLORS from "../../../assets/colors/colors";

const styles = StyleSheet.create ({
   main : {
    flex:1,
    backgroundColor:'white'
   },
   LoginImg : {
    height:Dimensions.get("window").height / 1,
    width: Dimensions.get("window").width ,
  },
  AppLogoView: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:150,
    margin:15
  },
  AppLogoImg: {
    
    height: 52,
    width: 200,
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
    fontSize:14,
    fontWeight:"400",
    fontFamily:'Raleway-Regular'
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
    marginHorizontal: 19,
  },
  LoginTxt : {
   fontSize:14,
   fontWeight:"400",
   color: COLORS.primary,
   fontFamily:'Raleway-Regular'
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
})

export default styles;