import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,ScrollView
} from 'react-native';
import React from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';

const Service = ({navigation}) => {
  const [FirstName, onChangeFirstName] = React.useState('');
  const [LastName, onChangeLastName] = React.useState('');
  const [Company, onChangeCompany] = React.useState('');
  const [Designation, onChangeDesignation] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [Message, onChangeMessage] = React.useState('');

  return (
    <View style={styles.main}>

   {/* Header */}

      <View style={{height: 190,}}>
        <ImageBackground
          source={require('../../../assets/images/BookService.png')}
          style={styles.serviceImg}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.BackBtn}>
              <View style={styles.ProfileImg}>
                <Image
                  source={require('../../../assets/images/arrowBack.png')}
                  style={styles.arrowBackBtn}
                />
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.headerBarTxt}>Book Service</Text>
            </View>

            <View style={{left: 20}}>
              <Icon name="notifications" size={28} color={'#EC581F'} />
            </View>
          </View>
        </ImageBackground>

        <View style={{marginLeft:130,bottom:90}}>
        <Image source={require("../../../assets/images/UserImage.png")} style={{height:80,width:80}}/>
        <Text style={styles.profileTxt}>Jainil Bhatt</Text>
      </View>
      </View>
 
      {/* TextInput */}

      <ScrollView style={{marginTop:15}} showsVerticalScrollIndicator={false}>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeFirstName}
          value={FirstName}
          placeholder="First Name"
          placeholderTextColor={'#AEA8B2'}
          cursorColor={"black"}
        />
      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeLastName}
          value={LastName}
          placeholder="Last Name"
          placeholderTextColor={'#AEA8B2'}
          cursorColor={"black"}
        />
      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeCompany}
          value={Company}
          placeholder="Company"
          placeholderTextColor={'#AEA8B2'}
          cursorColor={"black"}
        />
      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeDesignation}
          value={Designation}
          placeholder="Designation"
          placeholderTextColor={'#AEA8B2'}
          cursorColor={"black"}
        />
      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeEmail}
          value={Email}
          placeholder="Email"
          placeholderTextColor={'#AEA8B2'}
          cursorColor={"black"}
        />
      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Phone"
          keyboardType='numeric'
          placeholderTextColor={'#AEA8B2'}
          cursorColor={"black"}
        />
      </View>

      <View style={styles.viewTextInput1}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeMessage}
          value={Message}
          placeholder="Message"
          placeholderTextColor={'#AEA8B2'}
          cursorColor={"black"}
        />
      </View>

       {/* BookServiceBtn */}
  
       <TouchableOpacity style={styles.ServiceBtn}>
         <Text style={styles.ServiceBtnTxt}>Book Service</Text>
       </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Service;
