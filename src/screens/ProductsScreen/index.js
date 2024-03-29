import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 15,
    paddingEnd: 20,
  },
  BackBtn: {},
  arrowBackBtn: {
    resizeMode: 'center',

    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 22,
    color: COLORS.text,
    fontWeight: '700',
    fontFamily: 'Raleway-Bold',
  },
  productView: {
    backgroundColor: COLORS.bottomTab,
    height: 120,
    width: '85%',
    borderRadius: 18,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 70,
    marginLeft: 26,
  },
  productImg: {
    resizeMode: 'center',
    height: 136,
    width: 181,
  },
  productTxt: {
    color: COLORS.Text,
    fontWeight: '700',
    fontSize: 22,
    fontFamily: 'Raleway-Bold',
  },
  productCarImg: {
    // resizeMode:"center",
    height: 100,
    width: 205,
  },
  productTxt1: {
    color: COLORS.Text,
    fontWeight: '700',
    fontSize: 22,
    fontFamily: 'Raleway-Bold',
    top: 30,
  },
  productCar2Img: {
    // resizeMode:"center",
    height: 125,
    width: 153,
    justifyContent: 'center',
  },
  productCar3Img: {
    // resizeMode:"center",
    height: 125,
    width: 85,
    justifyContent: 'center',
  },
  productTxt2: {
    color: COLORS.Text,
    fontWeight: '700',
    fontSize: 22,
    fontFamily: 'Raleway-Bold',
    top: 20,
  },
  productTxt3: {
    color: COLORS.Text,
    fontWeight: '700',
    fontSize: 22,
    fontFamily: 'Raleway-Bold',
    top: 15,
  },
});

export default styles;
