import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import styles from '.'
import Icon from 'react-native-vector-icons/Ionicons';


const Shop = ({navigation}) => {
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
          <TouchableOpacity onPress={() => navigation.goBack()}  style={styles.BackBtn}>
         
            <Image
              source={require('../../../assets/images/arrowBack.png')}
              style={styles.arrowBackBtn}
            />
  
          </TouchableOpacity>

          <View>
           <Text style={styles.headerBarTxt}>My Shop</Text>
          </View>

          <View style={{left: 30}}>
            <Icon name="notifications" size={28} color={'#EC581F'} />
          </View>
        </View>
            </View>


     {/* ShopCard */}
     
     <ScrollView style={{flex:1,backgroundColor:"#FFFFFF"}} showsVerticalScrollIndicator={false}>
     <View style={{flexDirection:"row"}}>
        <View style={styles.ShopCard}>
            <Image source={require("../../../assets/images/Elevator.png")} style={styles.ShopImg}/>
            <View style={{bottom:40}}>
            <Text style={styles.ShopTxt}>Jorem ipsum dolor sit</Text>
            <Text style={styles.ShopTxt1}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet</Text>
            </View>
            <TouchableOpacity style={styles.ShopBtn}>
                <Text style={styles.ShopBtnTxt}>View Details</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.ShopCard}>
            <Image source={require("../../../assets/images/remover.png")} style={styles.ShopImg}/>
            <View style={{bottom:40}}>
            <Text style={styles.ShopTxt}>Jorem ipsum dolor sit</Text>
            <Text style={styles.ShopTxt1}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet</Text>
            </View>
            <TouchableOpacity style={styles.ShopBtn}>
                <Text style={styles.ShopBtnTxt}>View Details</Text>
            </TouchableOpacity>
        </View>
     </View>

     <View style={{flexDirection:"row"}}>
        <View style={styles.ShopCard}>
            <Image source={require("../../../assets/images/bikeparking.png")} style={styles.ShopImg1}/>
            <View style={{}}>
            <Text style={styles.ShopViewTxt}>Jorem ipsum dolor sit</Text>
            <Text style={styles.ShopViewTxt1}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet</Text>
            </View>
            <TouchableOpacity style={styles.ShopViewBtn}>
                <Text style={styles.ShopBtnTxt}>View Details</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.ShopCard}>
            <Image source={require("../../../assets/images/remover.png")} style={styles.ShopImg}/>
            <View style={{bottom:40}}>
            <Text style={styles.ShopTxt}>Jorem ipsum dolor sit</Text>
            <Text style={styles.ShopTxt1}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet</Text>
            </View>
            <TouchableOpacity style={styles.ShopBtn}>
                <Text style={styles.ShopBtnTxt}>View Details</Text>
            </TouchableOpacity>
        </View>
     </View>

     <View style={{flexDirection:"row"}}>
        <View style={styles.ShopCard}>
            <Image source={require("../../../assets/images/Elevator.png")} style={styles.ShopImg}/>
            <View style={{bottom:40}}>
            <Text style={styles.ShopTxt}>Jorem ipsum dolor sit</Text>
            <Text style={styles.ShopTxt1}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet</Text>
            </View>
            <TouchableOpacity style={styles.ShopBtn}>
                <Text style={styles.ShopBtnTxt}>Book</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.ShopCard}>
            <Image source={require("../../../assets/images/remover.png")} style={styles.ShopImg}/>
            <View style={{bottom:40}}>
            <Text style={styles.ShopTxt}>Jorem ipsum dolor sit</Text>
            <Text style={styles.ShopTxt1}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet</Text>
            </View>
            <TouchableOpacity style={styles.ShopBtn}>
                <Text style={styles.ShopBtnTxt}>View Details</Text>
            </TouchableOpacity>
        </View>
     </View>

     <View style={{flexDirection:"row",marginBottom:10}}>
        <View style={styles.ShopCard}>
            <Image source={require("../../../assets/images/Elevator.png")} style={styles.ShopImg}/>
            <View style={{bottom:40}}>
            <Text style={styles.ShopTxt}>Jorem ipsum dolor sit</Text>
            <Text style={styles.ShopTxt1}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet</Text>
            </View>
            <TouchableOpacity style={styles.ShopBtn}>
                <Text style={styles.ShopBtnTxt}>View Details</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.ShopCard}>
            <Image source={require("../../../assets/images/remover.png")} style={styles.ShopImg}/>
            <View style={{bottom:40}}>
            <Text style={styles.ShopTxt}>Jorem ipsum dolor sit</Text>
            <Text style={styles.ShopTxt1}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet</Text>
            </View>
            <TouchableOpacity style={styles.ShopBtn}>
                <Text style={styles.ShopBtnTxt}>View Details</Text>
            </TouchableOpacity>
        </View>
     </View>

     </ScrollView>
   
    </View>
  )
}

export default Shop