import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';


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
            <Image source={require("../../Assets/images/UserImage.png")} style={styles.ProfileImg} />
           {/* </View> */}
          </TouchableOpacity>
  
        <View>
          <Image source={require('../../Assets/images/IcubeLogo.png')} style={{height:36,width:138}}/>
        </View>
  
        <View style={{left:10}}>
          <Icon name="notifications" size={28} color={"#EC581F"}/>
        </View>

      </View>
      </View>

      {/* slider Image */}

      <View>
        <SliderBox
          images={images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#ff3300"
          inactiveDotColor="white"
          autoplay
          circleLoop
          resizeMode={'contain'}
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
      </View>

      {/* Product */}

      <View style={{flex: 0.5}}>
        <TouchableOpacity>
          <View style={styles.productView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Assets/images/car.png')}
                style={styles.productImg}
              />
              <Text style={styles.productTxt}>Our Product</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* cardList */}

      <View style={{flexDirection: 'row', flex: 0.5, bottom: 5, right: 3}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Warranty')}>
          <View style={styles.cardList}>
            <View style={styles.productIcon}>
              <Image
                source={require('../../Assets/images/setting.png')}
                style={{alignItems: 'center',resizeMode:"center"}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.cardTxt}>Warranty & Maintenance</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Product')}>
          <View style={{left: 10}}>
            <View style={styles.cardList}>
              <View style={styles.productIcon}>
                <Image
                  source={require('../../Assets/images/product.png')}
                  style={{alignItems: 'center', resizeMode:"center" }}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.cardTxt}>My Product</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', bottom: 15, right: 3}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Service')}>
          <View style={styles.cardList}>
            <View style={styles.productIcon}>
              <Image
                source={require('../../Assets/images/service.png')}
                style={{alignItems: 'center',resizeMode:"center"}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.cardTxt}>Book Service</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Shop')}>
          <View style={{left: 10}}>
            <View style={styles.cardList}>
              <View style={styles.productIcon}>
                <Image
                  source={require('../../Assets/images/Shops.png')}
                  style={{alignItems: 'center',resizeMode:'center'}}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.cardTxt}>My Shop</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
