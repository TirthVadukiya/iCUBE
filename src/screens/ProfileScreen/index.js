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
    right: 35,
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
  profileTxt : {
     fontSize:24,
     fontWeight:"600",
     right:13,
     color:COLORS.bgColor,
     fontFamily:"Lato-SemiBold"
  },
  ProfileView : {
     height:450,width:330,backgroundColor:"white",margin:15,
     borderColor:"#EFEFEF",borderWidth:1,borderRadius:5
  },
  ProfileInfo : {
    height:40,width:328,backgroundColor:COLORS.black,borderRadius:5,
    flexDirection:"row",alignItems:"center",justifyContent:"space-between",
  },
  profileInfoTxt : {
    fontSize:16,
    fontWeight:"600",
    color:COLORS.Text,
    fontFamily:"Raleway-SemiBold",left:10
  },
  DetailTxt : {
    color:"#A0A0A0",
    fontSize:15,
    fontWeight:"300",
    fontFamily:"Lato-Light"
  },
  DetailTxt1 : {
   fontSize:16,
   fontWeight:"400",
   color:COLORS.text1,
   fontFamily:"Lato-Regular"
  }
})

export default styles;