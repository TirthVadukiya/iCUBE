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
  right: 28,
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
    fontFamily: 'Raleway-Bold',right:8
  },
  viewTextInput: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.borderClr,
    marginHorizontal: 25,height:45,
    margin: 10,
  },
  txtInput: {
    width: '100%',
    marginLeft:10,
    color: 'black',
    fontSize:14,
    fontWeight:"400",
    fontFamily:"Raleway-Regular"
  },
  viewTextInput1 : {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.borderClr,
   height:45,width:145,
    margin: 10,
  },
  viewTextInput2: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.borderClr,
    marginHorizontal: 25,height:45,width:240,
    margin: 10,
  },
  UpdateBtn : {
   height:48,width:310,margin:20,left:5,
   backgroundColor:COLORS.black,borderRadius:10,justifyContent:"center"
  },
  UpdateTxt : {
     fontSize:16,
     fontWeight:'600',
     color:COLORS.Text,
     textAlign:"center",
     fontFamily:"Poppins-SemiBold"
  }
})

export default styles;