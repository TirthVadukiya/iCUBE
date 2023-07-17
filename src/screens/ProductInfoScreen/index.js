import React from "react";
import {StyleSheet} from "react-native";
import COLORS from "../../../assets/colors/colors";

const styles = StyleSheet.create ({
  main : {
    backgroundColor: COLORS.primary,
    flex: 1
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
    right:4
  },
  productView : {
    backgroundColor:COLORS.bottomTab,
    height:120,
    width:"85%",borderRadius:18,flexDirection:"column",alignItems:"center",marginTop:65,
    marginLeft:26
  },
  productImg : {
    resizeMode:"cover",
    height:137,width:163, 
  },
  productTxt : {
    color: COLORS.Text,
    fontWeight:"700",
    fontSize:22,
    fontFamily:"Raleway-Bold"
  },
  productInfoView : {
    justifyContent:"center",
    padding:20,left:8
  },
  productInfoTxt : {
     color : COLORS.TxtBlack,
     fontSize:12,
     fontWeight:"400",
     fontFamily : "Raleway-Regular",
    lineHeight:19
  },
  InfoView : {
   flexDirection:"row",alignItems:"center",left:10
  },
  arrowIcon : {
      resizeMode:"center"
  },
  InfoTxt : {
   color: COLORS.TxtBlack,
   fontSize:11,
   fontWeight:"500",
   fontFamily: "Raleway-Medium",
   marginRight:70
  },
  ProductVideoImg : {
    height:160,width:310,left:24,borderRadius:20,overflow:"hidden"
  },
  ProductView : {
    marginTop:125,width:27,marginLeft:260,
  },
  playBtn : {
    resizeMode:"contain",height:27,width:27
  },
  InfoBtn : {
    height:48,width:312,
    backgroundColor:COLORS.black,
    margin:20,marginBottom:20,borderRadius:10,left:2,justifyContent:'center'
  },
  InfoBtnTxt : {
  textAlign:"center",
  fontSize:16,
  color:COLORS.primary,
  fontWeight:"600",
  fontFamily:"Raleway-SemiBold"
  }
})

export default styles;

