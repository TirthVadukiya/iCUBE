import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
    main : {
        flex:1,
        backgroundColor:COLORS.primary
    },
    serviceImg : {
        height:"96%",width:"100%"
    },
    arrowBackBtn: {
        resizeMode: 'center',
        right: 28,
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
      viewTextInput: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.borderClr1,
        marginHorizontal: 25,
        margin: 10,
      },
      txtInput: {
        width: '100%',
        marginLeft:10,
        color: 'black',
      },
      viewTextInput1 : {
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.borderClr,
        marginHorizontal: 25,
        margin: 10,height:100
      },
      ServiceBtn : {
        height:"8%",
        backgroundColor:COLORS.black,
        width:"86%",
        margin:10,marginBottom:50,marginLeft:23,borderRadius:10,justifyContent:"center"
      },
      ServiceBtnTxt : {
        fontSize:16,
        fontWeight:"600",
        fontFamily:"Raleway-SemiBold",
        color:COLORS.primary,
        textAlign:"center"
      }
});

export default styles;