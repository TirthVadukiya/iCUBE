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
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          height: '12%',
          alignItems: 'center',
        }}>
         <TouchableOpacity onPress={()=> console.warn("hello")}>
          <View
            style={{
              height: 34,
              width: 34,
              backgroundColor: 'gray',
              borderRadius: 30,
              left: 12,
            }}>
            <Image
              source={require('../../Assets/UserImage.png')}
              style={styles.ProfileImg}
            />
          </View>
        </TouchableOpacity> 
     
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={require('../../Assets/Logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View>
          <Icon
            name="notifications"
            size={30}
            style={{color: 'orange', right: 10}}
          />
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
                source={require('../../Assets/car.png')}
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
                source={require('../../Assets/setting.png')}
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
                  source={require('../../Assets/product.png')}
                  style={{alignItems: 'center', resizeMode: 'center'}}
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
                source={require('../../Assets/service.png')}
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
                  source={require('../../Assets/Shops.png')}
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
