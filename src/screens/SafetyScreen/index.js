import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBarView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: '12%',
    alignItems: 'center',
  },
  arrowBackBtn: {
    resizeMode: 'center',
    right: 15,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoPlayBtn: {
    backgroundColor: '#EC581F',
    height: 30,
    width: 30,
    borderRadius: 25,
    left: 130,
    top: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safetyPdfTxt: {
    color: COLORS.black,
    fontSize: 22,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Raleway-Regular',
    marginTop: 20,
    left: 11,
  },

  pdfView: {
    height: 60,
    width: 340,
  marginTop:10,left:10,
    borderRadius: 18,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  PdfTxtView: {
    backgroundColor: COLORS.black,
    height: 48,
    width: 48,
    borderRadius: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfImg: {
    height: 31,
    width: 25,
  },
  PdfTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
  },
});

export default styles;
