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
  arrowBackBtn: {
    resizeMode: 'contain',
    height: 17,
    width: 23,
  },
  warrantyTxt: {
    fontSize: 22,
    color: '#EC581F',
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
  },
  warrantyCardView: {
    // resizeMode: 'contain',
    width: '100%',
    height: 180,
    padding: 10,
    marginTop: 20,
  },
  maintenanceView: {
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 10,
    width: '55%',
    // marginTop: 20,
    marginLeft: 10,
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
  expiredView: {
    backgroundColor: '#C00',
    marginStart: 20,
    marginEnd: 20,
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  amcTxt: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    fontWeight: '600',
  },
  pdfView: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    margin: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 17,
  },
  pdfImg: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  pdfTxt: {
    fontSize: 12,
    color: '#EC581F',
    fontWeight: '600',
  },
  calendarImg: {
    resizeMode: 'contain',
    height: 19,
    width: 20,
    marginStart: 15,
  },
  calendarTxt: {
    fontSize: 10,
    color: '#727270',
    fontFamily: 'Raleway-Regular',
    fontWeight: '400',
  },
  calendarView: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    flex: 1,
    marginStart: 15,
    marginEnd: 15,
    borderRadius: 15,
    flexDirection: 'column',
  },
  dateTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EC581F',
    fontFamily: 'Rajdhani-SemiBold',
    marginTop: 5,
  },
});

export default styles;
