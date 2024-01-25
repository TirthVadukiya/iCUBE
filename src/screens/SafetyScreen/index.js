import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
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
  videoImg: {
    // resizeMode: 'contain',
    height: 105,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 12,
    marginEnd: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  videoPlayBtn: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    marginEnd: 10,
    marginBottom: 5,
  },
  videoView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    marginEnd: 10,
    marginBottom: 10,
  },
  pdfTxt: {
    color: '#EC581F',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
  },
  pdfView: {
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  pdfImg: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  pdfViewTxt: {
    color: '#EC581F',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Raleway-Regular',
    marginStart: 15,
  },
});

export default styles;
