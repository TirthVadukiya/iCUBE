import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {COLORS} from '../../assets/colors/colors';

import Feather from 'react-native-vector-icons/Feather';

export default function CustomDialogNetwork({visible}) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <View style={styles.modalMainView}>
          <View style={{flexDirection: 'row'}}>
            <Feather name="wifi-off" size={25} color={COLORS.text1} />
            <Text style={styles.txtNoNetwork}>You are currently offline</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalMainView: {
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 8.5,
    paddingEnd: 25,
    paddingStart: 25,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  txtNoNetwork: {
    color: COLORS.text1,
    fontWeight: '700',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    paddingStart: 20,
  },
  txtOk: {
    width: 70,
    backgroundColor: COLORS.text1,
    padding: 10,
    marginStart: 10,
    borderRadius: 10,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
  },
});
