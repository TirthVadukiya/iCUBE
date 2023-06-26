import { View, Text,Image, StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
 
const SplashScreen = ({navigation}) => {
    setTimeout(()=>{
        navigation.replace('BottomTab')
    },3000)
  return (
    <View style={{flex:1,}}>
    
    
       <Image style={styles.main} source={require('../../Assets/Home.jpg')}/>
       <Text style={styles.images }>Travel App</Text>
       {/* <View style={{flex:3, top:520,flexDirection:'row',justifyContent:'space-evenly',marginVertical:10,}}>
       </View>
        */}
    </View>
  )
}

const styles = StyleSheet.create ({
    main: {
      resizeMode: 'center',
     flex:0,
      height:150,
      width:150,
      top:280,
      marginLeft:100,
      borderRadius:60,
      borderColor:'white',
      shadowColor:'black',
    },
    images: {
      fontSize:25,
      fontWeight:'bold',
      fontVariant:'small-caps',
      textAlign:'center',
      color:'white',
      top:280
    }
   })

export default SplashScreen;