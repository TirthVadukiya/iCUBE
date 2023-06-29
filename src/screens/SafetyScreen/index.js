import React from "react";
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  main : {
    flex:1,
    backgroundColor:"white"
  },
  headerBarView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: '12%',
    alignItems: 'center',
  },
  ProfileImg: {
    right: 10,
    backgroundColor: 'orange',
    height: 35,
    width: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"orange",borderWidth:1
  },
})

export default styles;