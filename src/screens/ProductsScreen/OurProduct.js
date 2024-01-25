import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../assets/colors/colors';
import {PRODUCT_INFO} from '../../constants/route-names';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';
import {ICONS} from '../../constants/icons';

const OurProduct = ({navigation}) => {
  const isConnected = useNetworkStatus();

  return (
    <View style={styles.main}>
      {/* header bar */}
      <CustomHeaderAdd
        navigation={navigation}
        title={'Our Product'}
        icon={ICONS.notification_icon}
        // redirect={ADD_TAXES}
      />
      {/* Our Product */}

      <ScrollView
        style={{flex: 1, backgroundColor: COLORS.primary}}
        showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            style={styles.productView}
            onPress={() => navigation.navigate(PRODUCT_INFO)}>
            <View style={{alignItems: 'center', bottom: 55}}>
              <Image
                source={require('../../../assets/images/car.png')}
                style={styles.productImg}
              />
              <Text style={styles.productTxt}>2-Post Parking Systems</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productView}>
            <View style={{alignItems: 'center', bottom: 55}}>
              <Image
                source={require('../../../assets/images/car.png')}
                style={styles.productImg}
              />
              <Text style={styles.productTxt}>4-Post Parking Systems</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productView}>
            <View style={{alignItems: 'center', bottom: 50}}>
              <Image
                source={require('../../../assets/images/car1.png')}
                style={styles.productCarImg}
              />
              <Text style={styles.productTxt1}>Suspended Parking Systems</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productView}>
            <View
              style={{
                alignItems: 'center',
                bottom: 53,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/images/car2.png')}
                style={styles.productCar2Img}
              />
              <Text style={styles.productTxt2}>Pit Parking Systems</Text>
            </View>
          </TouchableOpacity>

          <View style={{marginBottom: 12}}>
            <TouchableOpacity style={styles.productView}>
              <View style={{alignItems: 'center', bottom: 55}}>
                <Image
                  source={require('../../../assets/images/car3.png')}
                  style={styles.productCar3Img}
                />
                <Text style={styles.productTxt3}>Rotary Parking Systems</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default OurProduct;
