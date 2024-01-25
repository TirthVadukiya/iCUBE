import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 60,
    padding: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'black',
  },
  userImg: {
    // resizeMode: 'contain',
    height: 32,
    width: 32,
  },
  logoImg: {
    // resizeMode: 'contain',
    height: 30,
    width: 110,
  },
  productImg: {
    resizeMode: 'contain',
    height: 140,
  },
  productTxt: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
    marginStart: 130,
    marginTop: 35,
  },
  productView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Lato-Semibold',
    paddingHorizontal: 10,
    backgroundColor: '#F7F7F7',
    shadowColor: 'black',
    shadowOpacity: 0.37,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },
  warrantyImg: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
  },
  warrantyTxt: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
