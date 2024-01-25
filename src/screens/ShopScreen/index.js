import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerView: {
    height: 60,
    padding: 10,
    // backgroundColor: 'black',
  },
  backBtn: {
    // right: 28,
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
    color: COLORS.text,
    fontFamily: 'Raleway-Bold',
    right: 8,
  },
  shopView: {
    width: 150,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Lato-Semibold',
    padding: 15,
    backgroundColor: '#F7F7F7',
    margin: 10,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    flex: 1,
  },
  productImg: {
    resizeMode: 'contain',
    height: 110,
    width: 60,
  },
  detailTxt: {
    fontSize: 8,
    color: '#727270',
    fontFamily: 'Raleway-Regular',
  },
  detailBtn: {
    backgroundColor: '#EC581F',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    height: 22,
    padding: 2,
    marginTop: 10,
  },
});

export default styles;
