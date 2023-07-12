import { View, Text,ImageBackground,Image,TouchableOpacity,ScrollView,TextInput } from 'react-native'
import React from 'react'
import styles from '.'
import Icon from 'react-native-vector-icons/Ionicons';


const EditProfile = ({navigation}) => {
  const [FirstName, onChangeFirstName] = React.useState('');
  const [Mobile, onChangeMobile] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [City, onChangeCity] = React.useState('');
  const [PinCode, onChangePinCode] = React.useState('');
  const [Address, onChangeAddress] = React.useState('');
  const [Occupation, onChangeOccupation] = React.useState('');
  const [OwnCar1, onChangeOwnCar1] = React.useState('');
  const [OwnCar2, onChangeOwnCar2] = React.useState('');
 
  return (
    <View style={styles.main}>

      {/* header */}
     
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.ProfileImg}>
                <Image
                  source={require('../../../assets/images/arrowBack.png')}
                  style={styles.arrowBackBtn}
                />
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.headerBarTxt}>Profile Edit</Text>
            </View>

            <View style={{left: 25}}>
              <Icon name="notifications" size={28} color={'#EC581F'} />
            </View>
          </View>
        </ImageBackground>

        <View style={{marginLeft:130,bottom:90}}>
        <Image source={require("../../../assets/images/UserImage.png")} style={{height:80,width:80}}/>
        <TouchableOpacity style={{width:29,borderRadius:15,left:57,bottom:30}}>
        <Image source={require("../../../assets/images/updateImg.png")} style={{height:29,width:29,}}/>
        </TouchableOpacity>
      </View>
      </View>


   {/* TextInput */}

    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeFirstName}
          value={FirstName}
          placeholder="Name"
          placeholderTextColor={'#AEA8B2'}
          cursorColor={"black"}
        />
      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeMobile}
          value={Mobile}
          keyboardType="numeric"
          placeholder="Mobile"
          placeholderTextColor={'#AEA8B2'}
          
        />
      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeEmail}
          value={Email}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={'#AEA8B2'}
        />
      </View>

     <View style={{flexDirection:"row",left:14}}>
      <View style={styles.viewTextInput1}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeCity}
          value={City}
          placeholder="City"
          placeholderTextColor={'#AEA8B2'}
          
        />
      </View>

      <View style={styles.viewTextInput1}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangePinCode}
          value={PinCode}
          placeholder="380008"
          keyboardType="numeric"
          placeholderTextColor={'#AEA8B2'}
          
        />
      </View>

      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeAddress}
          value={Address}
          placeholder="Address"
          placeholderTextColor={'#AEA8B2'}
        />
      </View>

      <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeOccupation}
          value={Occupation}
          placeholder="Occupation"
          placeholderTextColor={'#AEA8B2'}
        />
      </View>

      <View style={{flexDirection:"row",alignItems:"center"}}>
      <View style={styles.viewTextInput2}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeOwnCar1}
          value={OwnCar1}
          placeholder="Own car 1"
          placeholderTextColor={'#AEA8B2'}
          />
      </View>
     
     <TouchableOpacity>
      <Image source={require("../../../assets/images/PlusBtn.png")} style={{height:45,width:45}}/>
     </TouchableOpacity>

      </View>

      <View style={{flexDirection:"row",alignItems:"center"}}>
      <View style={styles.viewTextInput2}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeOwnCar2}
          value={OwnCar2}
          placeholder="Own car 2"
          placeholderTextColor={'#AEA8B2'}
          />
      </View>
     
     <TouchableOpacity>
      <Image source={require("../../../assets/images/MinsBtn.png")} style={{height:45,width:45}}/>
     </TouchableOpacity>

      </View>

      {/* UpdateBtn */}

      <TouchableOpacity style={styles.UpdateBtn} onPress={()=> navigation.goBack()}>
        <Text style={styles.UpdateTxt}>Update Profile</Text>
      </TouchableOpacity>

    </ScrollView>

    </View>
  )
}

export default EditProfile