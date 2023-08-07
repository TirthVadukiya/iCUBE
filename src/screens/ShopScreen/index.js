import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';


const styles = StyleSheet.create({
   main : {
    flex:1,
     backgroundColor:"#F5F5F5"
   },
   headerBarView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: '12%',
    alignItems: 'center',
    
  },
  BackBtn : {
    right: 35,
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
    fontFamily: 'Raleway-Bold',right:5
  },
  ShopCard : {
    height:170,width:160,backgroundColor:COLORS.background2,
    margin:10,borderRadius:18,marginTop:50,alignItems:"center"
  },
  ShopImg : {
    resizeMode:"contain",height:110,width:75,bottom:48
  },
  ShopTxt : {
     color:COLORS.black,
     fontSize:14,
     fontWeight:"600",
     fontFamily:"Raleway-SemiBold"
  },
  ShopTxt1: {
    fontSize:8,
    fontWeight:"300",
    fontFamily:"Raleway-Light",
    color:COLORS.bgColor,
    lineHeight:11
  },
   ShopBtn : {
    height:25,width:120,
    backgroundColor:COLORS.black,bottom:18,borderRadius:15,justifyContent:"center"
   },
   ShopBtnTxt : {
    fontSize:14,
    fontWeight:"600",
    color:COLORS.Text,
    textAlign:"center",
    fontFamily: "Raleway-SemiBold"
   },
   ShopImg1 : {
   bottom:30,resizeMode:"contain",height:68,width:137
   },
   ShopViewTxt : {
    color:COLORS.black,
    fontSize:14,
    fontWeight:"600",
    fontFamily:"Raleway-SemiBold"
 },
 ShopViewTxt1: {
   fontSize:8,
   fontWeight:"300",
   fontFamily:"Raleway-Light",
   color:COLORS.bgColor,
   lineHeight:11
 },
  ShopViewBtn : {
   height:25,width:120,
   backgroundColor:COLORS.black,borderRadius:15,justifyContent:"center",top:25
  },
});

export default styles;