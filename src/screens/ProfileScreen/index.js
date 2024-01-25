import React from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerImg: {
    resizeMode: 'cover',
    height: 200,
    width: '100%',
  },
  backBtn: {
    right: 28,
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
  profileImg: {
    resizeMode: 'contain',
    height: 80,
    width: 80,
    overflow: 'hidden',
    borderRadius: 50,
  },
  userNameTxt: {
    fontSize: 24,
    color: '#727270',
    fontWeight: '600',
    fontFamily: 'Raleway-Light',
  },
  detailView: {
    flexDirection: 'column',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    padding: 15,

    borderColor: '#EFEFEF',
    marginStart: 10,
    overflow: 'hidden',
    marginEnd: 10,
    shadowColor: '#9D9D9D',
    borderWidth: 1,
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    // margin: 5,
  },
  profileInfo: {
    height: 40,
    backgroundColor: '#EC581F',
    marginStart: 10,
    marginEnd: 10,
    // margin: 10,
    // padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  profileTxt: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Raleway-Light',
    padding: 10,
  },
  editBtn: {
    resizeMode: 'contain',
    height: 45,
    width: 45,
  },
  detailTxt: {
    color: '#A0A0A0',
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'Raleway-Light',
  },
  detailTxt1: {
    color: '#000',
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'Raleway-Regular',
  },
  detailNumberTxt: {
    color: '#000',
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'Lato-Regular',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
