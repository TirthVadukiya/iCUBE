import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {ICONS} from '../../constants/icons';
import SnackbarShow from '../../utils/SnackbarShow';
import {
  PLEASE_ENTER_COMPANY,
  PLEASE_ENTER_DESIGNATION,
  PLEASE_ENTER_EMAIL,
  PLEASE_ENTER_FIRST_NAME,
  PLEASE_ENTER_LAST_NAME,
  PLEASE_ENTER_MESSAGE,
  PLEASE_ENTER_PHONE,
} from '../../utils/SnackBarLabel';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';

const Service = ({navigation}) => {
  const isConnected = useNetworkStatus();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [message, setMessage] = React.useState('');

  function bookService() {
    if (firstName == '') {
      SnackbarShow(PLEASE_ENTER_FIRST_NAME);
      return;
    }
    if (lastName == '') {
      SnackbarShow(PLEASE_ENTER_LAST_NAME);
      return;
    }
    if (company == '') {
      SnackbarShow(PLEASE_ENTER_COMPANY);
      return;
    }
    if (designation == '') {
      SnackbarShow(PLEASE_ENTER_DESIGNATION);
      return;
    }
    if (email == '') {
      SnackbarShow(PLEASE_ENTER_EMAIL);
      return;
    }
    if (number == '') {
      SnackbarShow(PLEASE_ENTER_PHONE);
      return;
    }
    if (message == '') {
      SnackbarShow(PLEASE_ENTER_MESSAGE);
      return;
    }
  }

  return (
    <View style={styles.main}>
      {/* Header */}
      <View style={{flex: 0.4}}>
        <ImageBackground
          source={require('../../../assets/images/BookService.png')}
          style={styles.headerImg}>
          <CustomHeaderAdd
            navigation={navigation}
            title={'Book Service'}
            icon={ICONS.notification_icon}
            // redirect={ADD_TAXES}
          />
          <View style={{alignItems: 'center', marginTop: 65}}>
            <Image source={ICONS.user_image} style={styles.profileImg} />
            <Text style={styles.userNameTxt}>Jainil Bhatt</Text>
          </View>
        </ImageBackground>
      </View>

      {/* Details */}

      <View style={{flex: 0.7}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            style={{
              margin: 20,
              flexDirection: 'column',
              flex: 1,
            }}>
            {/* First Name */}
            <View style={{marginTop: 10}}>
              <TextInput
                style={styles.txtInput}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First Name"
                placeholderTextColor={'gray'}
              />
            </View>
            {/* last Name */}
            <View style={{marginTop: 15}}>
              <TextInput
                style={styles.txtInput}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
                placeholderTextColor={'gray'}
              />
            </View>
            {/* last Name */}
            <View style={{marginTop: 15}}>
              <TextInput
                style={styles.txtInput}
                onChangeText={setCompany}
                value={company}
                placeholder="Company"
                placeholderTextColor={'gray'}
              />
            </View>
            {/* last Name */}
            <View style={{marginTop: 15}}>
              <TextInput
                style={styles.txtInput}
                onChangeText={setDesignation}
                value={designation}
                placeholder="Designation"
                placeholderTextColor={'gray'}
              />
            </View>
            {/* last Name */}
            <View style={{marginTop: 15}}>
              <TextInput
                style={styles.txtInput}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor={'gray'}
              />
            </View>
            {/* last Name */}
            <View style={{marginTop: 15}}>
              <TextInput
                style={styles.txtInput}
                onChangeText={setNumber}
                value={number}
                placeholder="Phone"
                placeholderTextColor={'gray'}
              />
            </View>
            {/* last Name */}
            <View style={{marginTop: 15}}>
              <TextInput
                style={styles.txtAnnInput}
                placeholder="Message"
                multiline={true}
                placeholderTextColor={'gray'}
                keyboardType="default"
                returnKeyLabel="Done"
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
                value={message}
                onChangeText={v => setMessage(v)}
                blurOnSubmit={true}
              />
            </View>

            <View
              style={{
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.updateBtn}
                onPress={() => bookService()}>
                <Text style={styles.updateTxt}>Book Service</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Service;
