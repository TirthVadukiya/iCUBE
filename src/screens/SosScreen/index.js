import React from "react";
import {StyleSheet } from "react-native"
import COLORS from "../../../assets/colors/colors";

const styles = StyleSheet.create ({
  main : {
     flex:1,
     backgroundColor:COLORS.primary
  },
  serviceImg : {
    height:"96%",width:"100%"
},
arrowBackBtn: {
    resizeMode: 'center',
    right: 15,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBarTxt: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.black,
    fontFamily: 'Raleway-Bold',
  },
  checkBox : {
    flexDirection:'row',left:10,marginTop:10
  },
  checkBoxTxt : {
    fontSize:14,
    fontWeight:"400",
    color:COLORS.text2,lineHeight:21,marginRight:50,
    fontFamily:"Lato-Regular",top:3
  }
})

export default styles