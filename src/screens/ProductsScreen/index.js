import React from "react";
import {StyleSheet} from "react-native";
import COLORS from "../../../assets/colors/colors";

const styles = StyleSheet.create ({
  main : {
    flex:1,
    backgroundColor:COLORS.primary
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
  productView : {
    backgroundColor:COLORS.bottomTab,
    height:120,
    width:"85%",borderRadius:18,flexDirection:"column",alignItems:"center",marginTop:70,marginLeft:26
  },
  productImg : {
    resizeMode:"contain",
    
  },
  productTxt : {
    color: COLORS.Text,
    fontWeight:"700",
    fontSize:22,
    fontFamily:"Raleway-Bold"
  }
})

export default styles;