import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.primary,
    flex: 1,
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
  productInfoImg: {
    resizeMode: 'contain',
    height: 180,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parkingTxt: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
  },
  parkingInfoTxt: {
    color: 'black',
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'left',
  },
  arrowBack: {
    height: 11,
    width: 16,
  },
  installationView: {
    marginTop: 20,
    marginStart: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  installationTxt: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    fontWeight: '500',
    marginStart: 10,
  },
  carVideoView: {
    resizeMode: 'contain',
    height: 150,
    width: '100%',
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
  productInfoBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#EC581F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    fontSize: 14,
    marginTop: 25,
  },
  informationTxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Raleway-regular',
    fontWeight: '600',
  },
});

export default styles;
