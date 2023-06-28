import { View, Text,TouchableOpacity, Image,TextInput } from 'react-native'
import React from 'react'
import styles from '.'


const Login = ({navigation}) => {

const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.main}>

      {/* LoginTopImg */}
      <View>
     <Image source={require("../../Assets/images/Image1.png")} style={styles.LoginTopImg}/>
     </View>

    {/* AppLogo */}

    <View style={styles.AppLogoView}>
      <Image source={require('../../Assets/images/IcubeLogo.png')} style={{height:62.5,width:235}}/>
      
    </View>

    <View style={{alignItems:'center',marginVertical:-37}}>
      <Image source={require("../../Assets/images/parking.png")} style={{resizeMode:'center'}}/>
    </View>
    
     {/* LoginTxt */}

     <View style={styles.LoginTxtView}>
      <Text style={styles.LoginTxt1}>Log In</Text>
      <Text style={styles.LoginTxt2}>Use your Diesel Sports account to continue</Text>
     </View>

     {/* TextInput */}

     <View style={styles.viewTextInput}>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Mobile Number"
          keyboardType="numeric"
          placeholderTextColor={'#AEA8B2'}
          secureTextEntry
        />
      </View>

      {/* LoginBtn */}

     <TouchableOpacity>
      <View style={styles.LoginBtn}>
        <Text>LOGIN</Text>
        <Image source={require("../../Assets/images/loginLogo.png")} style={{height:20,width:19}}/>
      </View>
     </TouchableOpacity>

    </View>
  )
}

export default Login