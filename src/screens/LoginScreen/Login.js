import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
      <Text style={{color:"white",fontSize:20}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login