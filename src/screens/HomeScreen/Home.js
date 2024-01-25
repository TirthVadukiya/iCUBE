import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {SliderBox} from 'react-native-image-slider-box';
import COLORS from '../../../assets/colors/colors';
import {ICONS} from '../../constants/icons';
import {
  OUR_PRODUCT,
  PRODUCT,
  SERVICE,
  SHOP,
  WARRANTY,
} from '../../constants/route-names';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomHeader from '../../Components/CustomHeader';

const images = [
  (URL = require('../../../assets/images/Slider1.png')),
  (URL = require('../../../assets/images/Slider2.png')),
  (URL = require('../../../assets/images/Slider3.png')),
];

// useEffect(() => {
//   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
//     // Your custom logic here
//     // If you want to prevent the default behavior, do not return true

//     // For example, you can show a message or perform some other action
//     console.log('Back button pressed!');

//     // If you want to prevent the default behavior, do not return true
//     // If you return true, the default behavior (e.g., going back to the previous screen) will be prevented
//     return true;
//   });

//   // Cleanup the event listener when the component unmounts
//   return () => backHandler.remove();
// }, []);

const Home = ({navigation}) => {
  const isConnected = useNetworkStatus();

  return (
    <View style={styles.mainView}>
      {/* header bar */}
      {/* <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={ICONS.user_image} style={styles.userImg} />
        </TouchableOpacity>
        <View>
          <Image
            source={require('../../../assets/images/icube_logo.png')}
            style={styles.logoImg}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="notifications" size={28} color={'#EC581F'} />
          </TouchableOpacity>
        </View>
      </View> */}
      <CustomHeader navigation={navigation} icon={ICONS.notification_icon} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: 10, marginTop: 15}}>
          {/* ImageSlider */}
          <View style={{marginTop: 10}}>
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
                marginEnd: 20,
              }}
            />
          </View>

          {/* product */}
          <View style={{marginTop: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate(OUR_PRODUCT)}>
              <ImageBackground
                source={require('../../../assets/images/product_img.png')}
                style={styles.productImg}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <Text style={styles.productTxt}>Our Product</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          {/* Product Item */}

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
            }}>
            <TouchableOpacity
              style={[styles.productView, {flex: 1, marginEnd: 10}]}
              onPress={() => navigation.navigate(WARRANTY)}>
              <Image
                source={ICONS.warranty_img}
                style={{
                  resizeMode: 'contain',
                  height: 68,
                  width: 68,
                  marginTop: 10,
                }}
              />
              <Text style={styles.warrantyTxt}>Warranty & Maintenance</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.productView, {flex: 1, marginStart: 10}]}
              onPress={() => navigation.navigate(PRODUCT)}>
              <Image
                source={ICONS.product}
                style={{
                  resizeMode: 'contain',
                  height: 68,
                  width: 68,
                  marginTop: 10,
                }}
              />
              <Text style={styles.warrantyTxt}>My Product</Text>
            </TouchableOpacity>
          </View>

          {/* service & shop */}

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
            }}>
            <TouchableOpacity
              style={[styles.productView, {flex: 1, marginEnd: 10}]}
              onPress={() => navigation.navigate(SERVICE)}>
              <Image
                source={ICONS.warranty_img}
                style={{
                  resizeMode: 'contain',
                  height: 68,
                  width: 68,
                  marginTop: 10,
                }}
              />
              <Text style={[styles.warrantyTxt, {marginTop: 30}]}>
                Book Service
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.productView, {flex: 1, marginStart: 10}]}
              onPress={() => navigation.navigate(SHOP)}>
              <Image
                source={ICONS.product}
                style={{
                  resizeMode: 'contain',
                  height: 68,
                  width: 68,
                  marginTop: 10,
                }}
              />
              <Text style={styles.warrantyTxt}>My Shop</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Home;
