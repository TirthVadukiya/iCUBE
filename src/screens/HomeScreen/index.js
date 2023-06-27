import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ProfileImg: {
    borderRadius: 30,
    height: 30,
    width: 30,
    left: 2,
    top: 2,
  },
  logoImage: {
    resizeMode: 'contain',
    height: 30,
  },
  productView: {
    height: 85,
    backgroundColor: '#EC581F',
    width: 310,
    borderRadius: 18,
    marginLeft: 25,
    top: 65,
  },
  productIcon: {
    backgroundColor: '#FFFFFF',
    height: 68,
    width: 68,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImg: {
    resizeMode: 'contain',
    height: 140,
    bottom: 60,
    left: 12,
  },
  productTxt: {
    fontSize: 22,
    fontFamily: 'Raleway',
    fontWeight: '700',
    color: '#FFF',
    top: 25,
    left: 5,
  },
  cardList: {
    backgroundColor: '#F7F7F7',
    height: 140,
    width: 152,
    borderRadius: 20,
    left: 26,
    opacity: 10,
    shadowOpacity: 10,
    shadowColor: 'black',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardTxt: {
    fontSize: 16,
    fontFamily: 'Raleway',
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    margin: 5,
  },
});

export default styles;
