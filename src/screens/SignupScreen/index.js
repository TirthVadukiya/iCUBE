import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerImg: {
    // resizeMode: 'contain',
    height: 125,
    width: '100%',
  },
  imageLogo: {
    height: 45,
    width: 165,
  },
  carLogo: {
    height: 130,
    width: 130,
    marginTop: 10,
  },
  loginTxt: {
    fontSize: 22,
    color: COLORS.text,
    fontFamily: 'Raleway-Regular',
    fontWeight: '700',
  },
  descriptionTxt: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: COLORS.text3,
  },

  txtInput: {
    width: '100%',
    height: 50,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Lato-Semibold',
    paddingHorizontal: 10,
    marginTop: 10,
    color: COLORS.text1,
  },
  txtAnnInput: {
    marginTop: 10,
    width: '100%',
    height: 100,
    borderColor: '#D6D6D6',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Lato-Semibold',
    // marginTop: 20,
    color: '#000',
    alignItems: 'flex-start',
    textAlign: 'left',
    textAlignVertical: Platform.OS == 'android' ? 'top' : 'auto',
  },

  loginBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#EC581F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    fontSize: 14,
    marginTop: 10,
    flexDirection: 'row',
    padding: 10,
  },
  loginTxtBtn: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
  },
  loginLogo: {
    height: 18,
    width: 18,
    marginLeft: 10,
  },
  viewLoginBtn: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 0,
    marginTop: 20,
    marginBottom: 10,
  },
  signupTxt: {
    color: '#EC581F',
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    fontWeight: '400',
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
