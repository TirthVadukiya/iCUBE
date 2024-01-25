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
    height: 70,
    width: 70,
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  checkBoxTxt: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
  },
  uploadImg: {
    resizeMode: 'contain',
    height: 134,
    width: '100%',
  },
  txtInput: {
    width: '100%',
    height: 45,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Lato-Regular',
    paddingHorizontal: 10,
    backgroundColor: '#F0EEEE',
    // marginTop: 10,
    color: '#000',
    // marginStart: 10,
    // marginEnd: 20,
  },
  updateBtn: {
    width: '100%',
    height: 45,
    backgroundColor: '#EC581F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    fontSize: 14,
  },
  submitTxt: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Raleway-Regular',
    fontWeight: '600',
  },
  viewBSUpload: {
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  viewButton: {
    width: '85%',
    backgroundColor: COLORS.text,
    borderRadius: 8,
    padding: 15,
    marginTop: 15,
  },
  txtButton: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    color: COLORS.primary,
    fontSize: 14,
  },
  viewButtonCancel: {
    width: '85%',
    backgroundColor: COLORS.black,
    borderRadius: 8,
    padding: 15,
    marginTop: 15,
  },
  txtButtonCancel: {
    color: COLORS.text1,
    textAlign: 'center',
    fontFamily: 'Lato-SemiBold',
    fontSize: 14,
  },
});

export default styles;
