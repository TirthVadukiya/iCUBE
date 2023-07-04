import {View, Text, TouchableOpacity, Image,ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import COLORS from '../../../assets/colors/colors';


const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
];

const Home = ({navigation}) => {
 

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* header bar */}
      <View
        style={styles.headerBarView}>
         
         <View style={{flexDirection:"row",flex:1,justifyContent:'space-evenly',alignItems:"center"}}>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
           {/* <View style={styles.ProfileImg}> */}
            <Image source={require("../../../assets/images/UserImage.png")} style={styles.ProfileImg} />
           {/* </View> */}
          </TouchableOpacity>
  
        <View>
          <Image source={require('../../../assets/images/IcubeLogo.png')} style={{height:36,width:138}}/>
        </View>
  
        <View style={{left:10}}>
          <Icon name="notifications" size={28} color={"#EC581F"}/>
        </View>

      </View>
      </View>

     
     <ScrollView  style={{backgroundColor:COLORS.primary}}>
    
         {/* slider Image */}
   

        <SliderBox
          images={images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#ff3300"
          inactiveDotColor="white"
          autoplay
          circleLoop
          resizeMode={'cover'}
          paginationBoxStyle={{
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 18,
            height: 4,
            borderRadius: 0,
            marginHorizontal: 0,
            left: 80,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
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
              <Image source={require("../../../assets/images/setting.png")} style={styles.cardViewImg}/ >
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
          <TouchableOpacity style={styles.cardMainView}>
            <View style={styles.cardView}>
              <Image source={require("../../../assets/images/service.png")} style={styles.cardViewImg}/ >
            </View>
            <Text style={styles.cardTxt}>Book Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardMainView}>
           <View style={styles.cardView}>
            <Image source={require("../../../assets/images/Shops.png")} style={styles.cardViewImg}/>
           </View>
           <Text style={styles.cardTxt}>My Shop</Text>
          </TouchableOpacity>
        </View>
       
        </View>
     
      </ScrollView>
    </View>
  );
};

export default Home;