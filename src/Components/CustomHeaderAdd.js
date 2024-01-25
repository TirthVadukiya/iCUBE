import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import BackArrow from './BackArrow';
import COLORS from '../../assets/colors/colors';

const CustomHeaderAdd = ({navigation, title, icon, redirect, value}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottomWidth: 0.5,
        borderBottomColor: '#bababa',
        paddingTop: 15,
        paddingBottom: 10,
        paddingEnd: 20,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow />
      </TouchableOpacity>
      <Text style={styles.txtTitle}>{title}</Text>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate(redirect, {trainer_id: value})}> */}
      <Image source={icon} style={styles.imgAdd} />
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default CustomHeaderAdd;

const styles = StyleSheet.create({
  txtTitle: {
    fontWeight: '700',
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    color: COLORS.text,
  },
  imgAdd: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
