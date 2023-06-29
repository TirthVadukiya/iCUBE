import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from '.'
import Icon from 'react-native-vector-icons/Ionicons';

const Safety = () => {
  return (
    <View style={styles.main}>
     
       {/* header bar */}
       <View
        style={styles.headerBarView}>
         
         <View style={{flexDirection:"row",flex:1,justifyContent:'space-evenly',alignItems:"center"}}>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
             {/* <Image s/> */}
          </TouchableOpacity>
  
        <View>
          <Image source={require('../../Assets/images/IcubeLogo.png')} style={{height:36,width:138}}/>
        </View>
  
        <View style={{left:10}}>
          <Icon name="notifications" size={28} color={"#EC581F"}/>
        </View>

      </View>
      </View>

    </View>
  )
}

export default Safety