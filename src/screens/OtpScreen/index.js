import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor:"#FFF",
  },
  OtpTopImg : {
    height: 110,
    width:  "100%",  
  },
  AppLogoView: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  AppLogoImg: {
    height: 54,
    width: 200,top:20
  },
  OtpVerificationTxt : {
    fontSize:25,
    fontWeight:"700",
    color:"#EC581F",
    textAlign:'center',
    marginVertical:25,top:10,
    fontFamily:"Raleway-Bold"
  },
  OtpTxtView : {
    marginVertical:10,
  },
  OtpTxt1 : {
    color:"#9C9C9C",
    fontSize:14,
    fontWeight:"400",
    // lineHeight:24,
    fontFamily:"Raleway-Regular",textAlign:"center"
  },
  OtpTxt2 : {
    fontSize:14,
    fontWeight:"400",
    color:"black",
    textAlign:"center",
    fontFamily:"Raleway-Regular",
    top:5
  },
  OtpTimer : {
    color:"#EC581F",
    fontSize:12,
    fontFamily:"Lato-Bold",
    fontWeight:"500",
    textAlign:"center"
  },
    textInputContainer: { 
      margin:10
  },
  roundedTextInput: {
    width:46,height:47,
    borderRadius: 24,
    borderWidth: 1,
    fontSize:22,
  },
  OtpResendView : {
   flexDirection:"row",
   justifyContent:"center",
   marginVertical:10
  },
  OtpReceiveTxt : {
    color:"#727270",
    fontSize:14,
    fontFamily:"Raleway-Bold",
    fontWeight:"700",
    fontStyle:"normal",
  },
  OtpResendTxt : {
   color: "#EC581F",
   fontSize:14,
   fontFamily:"Raleway-Medium",
   fontWeight:"500"
  }
});

export default styles;



