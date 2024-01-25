import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerView: {
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
  arrowBtn: {
    resizeMode: 'contain',
    height: 17,
    width: 23,
  },
  headerTitleTxt: {
    color: '#EC581F',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
  },
  productImg: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
  },
  codeView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 5,
    width: 150,
    marginTop: 60,
    marginStart: 20,
    borderRadius: 15,
  },
  codeTxt: {
    fontSize: 14,
    color: '#139E10',
    fontWeight: '700',
    fontFamily: 'Rajdhani-SemiBold',
  },
  productCodeTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Rajdhani-SemiBold',
  },
  carVideoView: {
    resizeMode: 'contain',
    height: 180,
    width: '100%',
    // marginStart: 10,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  playBtn: {
    resizeMode: 'contain',
    height: 27,
    width: 27,
    marginEnd: 15,
    marginBottom: 10,
  },
  pdfView: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,

    flexDirection: 'row',
  },
  pdfImg: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  termsTxt: {
    color: '#EC581F',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Raleway-Regular',
    marginStart: 10,
  },
  warrantyCardView: {
    // resizeMode: 'contain',
    height: 180,
    width: '100%',
    // padding: 10,
    marginTop: 40,
  },
  maintenanceView: {
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 10,
    width: '55%',
    // marginTop: 20,
    marginStart: 23,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: 45,
  },
  maintenanceTxt: {
    fontSize: 14,
    color: '#727270',
  },
  expiredTxt: {
    fontSize: 14,
    color: '#D9B600',
  },
  carImg: {
    resizeMode: 'contain',
    height: 120,
    width: 110,
    marginBottom: 45,
    marginStart: 10,
  },
  parkingTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Rajdhani-semiBold',
  },
});

export default styles;
