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
BackBtn : {
  right: 15,
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
    color: COLORS.black,
    fontFamily: 'Raleway-Bold',
  },
  checkBox : {
    flexDirection:'row',left:8,marginTop:10
  },
  checkBoxTxt : {
    fontSize:14,
    fontWeight:"400",
    color:COLORS.text2,lineHeight:21,marginRight:60,
    fontFamily:"Lato-Regular",top:3
  },
   UploadImg : {
    resizeMode:"contain",height:134,width:322,marginLeft:18
   },
   viewTextInput: {
    backgroundColor: '#F0EEEE',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.borderClr,
    // marginHorizontal:10,
    height:45,width:328,  
    margin: 10,left:4
  },
  txtInput: {
    width: '100%',
    marginLeft:10,
    fontWeight:"600",
    fontSize:14,
    fontFamily:"Raleway-SemiBold"
  },
  SubmitView : {
    marginBottom:38,
     backgroundColor:COLORS.black,
     height:48,width:328,
     margin:10,borderRadius:10,left:4,justifyContent:"center"
  },
  SubmitTxt : {
    fontSize:16,
    fontWeight:"600",
    color:COLORS.Text,
    textAlign:"center",
    fontFamily:"Raleway-SemiBold"
  }
})

export default styles