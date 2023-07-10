import { View, Text,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import styles from '.'
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../assets/colors/colors';

const OurProduct = ({navigation}) => {
  return (
    <View style={styles.main}>
     
     {/* header bar */}
     <View style={styles.headerBarView}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <View style={styles.ProfileImg}> */}
            <Image
              source={require('../../../assets/images/arrowBack.png')}
              style={styles.arrowBackBtn}
            />
            {/* </View> */}
          </TouchableOpacity>

          <View>
             <Text style={styles.headerTxt}>Our Product</Text>
          </View>

          <View style={{left: 10}}>
            <Icon name="notifications" size={28} color={'#EC581F'} />
          </View>
        </View>
      </View>

       {/* Our Product */}
        
        <ScrollView style={{flex:1,backgroundColor:COLORS.primary}}>
         <View >
            <TouchableOpacity style={styles.productView} onPress={()=> navigation.navigate("ProductInfo")}>
                <View style={{alignItems:"center",bottom:55}} >
                    <Image source={require("../../../assets/images/car.png")} style={styles.productImg}/>
                    <Text style={styles.productTxt}>2-Post Parking Systems</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.productView}>
                <View style={{alignItems:"center",bottom:55}} >
                    <Image source={require("../../../assets/images/car.png")} style={styles.productImg}/>
                    <Text style={styles.productTxt}>4-Post Parking Systems</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.productView}>
                <View style={{alignItems:"center",bottom:50}} >
                    <Image source={require("../../../assets/images/car1.png")} style={styles.productCarImg}/>
                    <Text style={styles.productTxt1}>Suspended Parking Systems</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.productView}>
                <View style={{alignItems:"center",bottom:53,justifyContent:"center"}} >
                    <Image source={require("../../../assets/images/car2.png")} style={styles.productCar2Img}/>
                    <Text style={styles.productTxt2}>Pit Parking Systems</Text>
                </View>
            </TouchableOpacity>

          <View style={{marginBottom:12}}>
          <TouchableOpacity style={styles.productView}>
                <View style={{alignItems:"center",bottom:55}} >
                    <Image source={require("../../../assets/images/car3.png")} style={styles.productCar3Img}/>
                    <Text style={styles.productTxt3}>Rotary Parking Systems</Text>
                </View>
            </TouchableOpacity>
         </View>
          </View>
          

        </ScrollView>

    </View>
  )
}

export default OurProduct