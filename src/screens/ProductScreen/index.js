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
        fontFamily: 'Raleway-Bold',
        right:8
      },
      WarrantyCardTxt: {
        height: '15%',
        width: '30%',
        marginLeft: 20,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom:110
      },
      WarrantyTxt1: {
        color: COLORS.green,
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
        bottom:34, 
      },
      Text1 : {
        fontSize:16,
        fontWeight:"700",
        color:COLORS.Text,
        fontFamily:"Rajdhani-Bold"
      },
     
      Text3 : {
        fontSize:22,
        fontWeight:"600",
        color:COLORS.Text,
        fontFamily:"Rajdhani-SemiBold"
      },
     
      termBtn : {
        height:50,width:152,backgroundColor:COLORS.cardView,marginTop:10,margin:5,marginLeft:15,
        borderRadius:10,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row",opacity:5,
        shadowColor:"black",shadowOpacity:20
      },
      pdfImg : {
        resizeMode:"center",height:30,width:30
      },
      termTxt : {
        color:COLORS.black,
        fontWeight:"600",fontSize:10,
        fontFamily: "Raleway-SemiBold"
      },
});

export default styles;