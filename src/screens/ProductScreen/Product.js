import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {ICONS} from '../../constants/icons';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';

const Product = ({navigation}) => {
  const isConnected = useNetworkStatus();

  return (
    <View style={styles.main}>
      {/* headerView */}
      <CustomHeaderAdd
        navigation={navigation}
        title={'My Product'}
        icon={ICONS.notification_icon}
        // redirect={ADD_TAXES}
      />

      {/* Product Detail */}

      {/* <View style={{}}> */}
      {/* product Code view */}

      <View style={{flex: 0.4, margin: 10}}>
        <ImageBackground
          source={require('../../../assets/images/Subtract.png')}
          style={styles.warrantyCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 0.4}}>
            <View style={styles.maintenanceView}>
              <Text style={styles.maintenanceTxt}>Maintenance Status :</Text>
              <Text style={styles.expiredTxt}>Expired</Text>
            </View>
            <Image
              source={require('../../../assets/images/car.png')}
              style={styles.carImg}
            />
          </View>

          <View style={{flex: 0.2, flexDirection: 'column'}}>
            <View style={{marginStart: 23}}>
              <Text style={styles.parkingTxt}>2-Post Parking Systems</Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={styles.parkingTxt}>Expiry Date: </Text>
                <Text style={styles.parkingTxt}>25/08/2023</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={styles.parkingTxt}>Maintenance Type: </Text>
                <Text style={styles.parkingTxt}>Comprehensive</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* </View> */}

      {/* product Video View */}

      <View style={{flex: 0.6}}>
        <View style={{margin: 20}}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/carpark.png')}
              style={styles.carVideoView}>
              <Image source={ICONS.video_play} style={styles.playBtn} />
            </ImageBackground>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.pdfView, {flex: 1, marginEnd: 10}]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../../../assets/images/pdf_icon.png')}
                  style={styles.pdfImg}
                />
                <Text style={styles.termsTxt}>Terms & Conditions</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.pdfView, {flex: 1, marginStart: 10}]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../../../assets/images/pdf_icon.png')}
                  style={styles.pdfImg}
                />
                <Text style={styles.termsTxt}>PMS Schedule</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Product;
