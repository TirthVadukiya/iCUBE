import {View, Text, TouchableOpacity, Image,ScrollView,BackHandler} from 'react-native'
import React, {useEffect} from 'react'
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import COLORS from '../../../assets/colors/colors';

const images = [
  URL = require("../../../assets/images/Slider1.png"),
  URL = require("../../../assets/images/Slider2.png"),
  URL = require("../../../assets/images/Slider3.png"),
];

const Home = ({navigation}) => {


 
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* header bar */}
      <View
        style={styles.headerBarView}>
         
         <View style={{flexDirection:"row",flex:1,justifyContent:'space-evenly',alignItems:"center"}}>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
        
            <Image source={require("../../../assets/images/UserImage.png")} style={styles.ProfileImg} />
          
          </TouchableOpacity>
  
        <View>
          <Image source={require('../../../assets/images/IcubeLogo.png')} style={{height:36,width:137}}/>
        </View>
  
        <View style={{left:20}}>
          <Icon name="notifications" size={28} color={"#EC581F"}/>
        </View>

      </View>
      </View>

     
     <ScrollView  style={{backgroundColor:COLORS.primary}} showsVerticalScrollIndicator={false}>
    
         {/* slider Image */}
   

        <SliderBox
          images={images}
          dotColor="#EC581F"
          inactiveDotColor="#FFFFFF"
          autoplay
          circleLoop
          resizeMode={'cover'}
        
          dotStyle={{
            width: 20,
            height: 4,
            borderRadius: 5,
            marginHorizontal: 0,
            left: 85,
            backgroundColor: '#FFFFFF',
          }}
          ImageComponentStyle={{
            borderRadius: 10,
            width: '90%',
            marginTop: 8,
            height: 130,
          }}
        />
   
           {/* Product */}

           <TouchableOpacity style={styles.productView} onPress={()=> navigation.navigate("OurProduct")}>
              <Image source={require("../../../assets/images/car.png")} style={styles.productImg}/>
              <Text style={styles.productImgTxt}>Our Product</Text>
           </TouchableOpacity>
    
      
     
          {/* cardList */}

       <View style={{flex:1}}>
        <View style={{flexDirection:"row",margin:18,justifyContent:"space-evenly",bottom:20}}>
          <TouchableOpacity style={styles.cardMainView} onPress={()=> navigation.navigate("Warranty")}>
            <View style={styles.cardView}>
              <Image source={require("../../../assets/images/setting.png")} style={styles.cardViewImg}/>
            </View>
            <Text style={styles.cardTxt}>Warranty & Maintenance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardMainView} onPress={()=> navigation.navigate("Product")}>
           <View style={styles.cardView}>
            <Image source={require("../../../assets/images/product.png")} style={styles.cardViewImg}/>
           </View>
           <Text style={styles.cardTxt}>My Product</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row",margin:18,justifyContent:"space-evenly",bottom:40}}>
          <TouchableOpacity style={styles.cardMainView} onPress={()=> navigation.navigate("Service")}>
            <View style={styles.cardView}>
              <Image source={require("../../../assets/images/service.png")} style={styles.cardViewImg} />
            </View>
            <Text style={styles.cardTxt}>Book Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardMainView} onPress={()=> navigation.navigate("Shop")}>
           <View style={styles.cardView}>
            <Image source={require("../../../assets/images/Shops.png")} style={styles.cardViewImg}/>
           </View>
           <Text style={styles.cardTxt}>My Shop</Text>
          </TouchableOpacity>
        </View>
       
        </View>
     
      </ScrollView>
    </View>
  )
}

export default Home