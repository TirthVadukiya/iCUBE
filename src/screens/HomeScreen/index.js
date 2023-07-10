import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  headerBarView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: '12%',
    alignItems: 'center',
  },
  ProfileImg: {
    right: 20,
    height: 35,
    width: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"orange",borderWidth:1
  },
  logoImage: {
    resizeMode: 'contain',
    height: 30,
  },
  productView : {
    backgroundColor:COLORS.black,
    height:65,width:"89%",
    margin:20,borderRadius:18,marginTop:80,
    flexDirection:"row",alignItems:"center"
  },
  productImg : {
    resizeMode:"cover",
    height:137,width:163,bottom:45,
  },
  productImgTxt : {
    color:COLORS.primary,
    fontSize:22,
    fontWeight:"700",
    fontFamily:"Raleway-Bold"
  }, 
  cardMainView : {
    backgroundColor:COLORS.cardView,
    height:135,
    width:"45%",
    borderRadius:18,
   
   alignItems:"center",justifyContent:"center"
  },
  cardView : {
    backgroundColor:COLORS.primary,
    height:"40%",
    width:"40%",
    borderRadius:50,
    alignItems:"center",justifyContent:"center",margin:5
  },
  cardViewImg : {
    resizeMode:"center",
    
  },
  cardTxt : {
    color:COLORS.text1,
    fontSize:16,
    fontWeight:"600",
    fontFamily:"Raleway-SemiBold"
  }

});

export default styles;