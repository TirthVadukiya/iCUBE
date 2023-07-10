import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerBarView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: '12%',
    alignItems: 'center',
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
  WarrantyCardTxt: {
    height: '15%',
    width: '55%',
    marginLeft: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:118
  },
  WarrantyTxt1: {
    color: COLORS.bgColor,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Rajdhani-Bold',
  },
  WarrantyTxt2: {
    color: COLORS.white1,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Rajdhani-Bold',
  },
  CarImg: {
    height: '80%',
    width: '42%',
    bottom:34 
  },
  Text1 : {
    fontSize:18,
    fontWeight:"700",
    color:COLORS.Text,
    fontFamily:"Rajdhani-Bold"
  },
 
  Text3 : {
    fontSize:24,
    fontWeight:"600",
    color:COLORS.Text,
    fontFamily:"Rajdhani-SemiBold"
  },
 
  expiredCard : {
    backgroundColor:COLORS.background1,
    height:"5%",
    width:"90%",left:18,
    borderRadius:16,justifyContent:"center",
  },
  expiredTxt : {
    color: COLORS.primary,
    textAlign:"center",
    fontSize:14,
    fontWeight:"600",
    fontFamily:"Raleway-SemiBold"
  },
  termBtn : {
    height:50,width:152,backgroundColor:COLORS.cardView,marginTop:10,margin:5,marginLeft:15,
    borderRadius:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:10
  },
  termTxt : {
    color:COLORS.black,
    fontWeight:"600",fontSize:10,right:15,
    fontFamily: "Raleway-SemiBold"
  },
  termTxt1 : {
    color:COLORS.black,
    fontWeight:"600",fontSize:10,right:32,
    fontFamily: "Raleway-SemiBold"
  },
  serviceBtn : {
    height:65,width:152,backgroundColor:COLORS.cardView,marginTop:10,margin:5,marginLeft:15,
    borderRadius:10,alignItems:"center",justifyContent:"center",
  },
  serviceTxt : {
    fontSize:10,
    color:COLORS.bgColor,
    fontWeight:"400",
    fontFamily: "Raleway-Regular",
    left:15
  },
  serviceTxt1 : {
    fontSize:16,
    color:COLORS.black,
    fontWeight:"400",
    fontFamily: "Rajdhani-SemiBold",bottom:20,right:22
  },
  serviceTxt2 : {
    fontSize:16,
    color:COLORS.black,
    fontWeight:"400",
    fontFamily: "Rajdhani-SemiBold",bottom:20,right:8
  },
  WarrantyCardTxt1: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Rajdhani-Bold',
  },
  WarrantyCardTxt2: {
    color: COLORS.green,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Rajdhani-Bold',
  },
});

export default styles;
