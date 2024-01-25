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
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';
import {ICONS} from '../../constants/icons';

const Warranty = ({navigation}) => {
  const isConnected = useNetworkStatus();

  return (
    <View style={styles.main}>
      {/* headerView */}
      <CustomHeaderAdd
        navigation={navigation}
        title={'Warranty & Maintenance'}
        icon={ICONS.notification_icon}
        // redirect={ADD_TAXES}
      />

      {/* Warranty Details */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{paddingStart: 18}}>
            <ImageBackground
              source={require('../../../assets/images/Subtract.png')}
              style={styles.warrantyCardView}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 0.4}}>
                <View style={styles.maintenanceView}>
                  <Text style={styles.maintenanceTxt}>
                    Maintenance Status :
                  </Text>
                  <Text style={styles.expiredTxt}>Expired</Text>
                </View>
                <Image
                  source={require('../../../assets/images/car.png')}
                  style={styles.carImg}
                />
              </View>

              <View style={{flex: 0.2, flexDirection: 'column'}}>
                <View style={{marginStart: 15}}>
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

          <View style={styles.expiredView}>
            <Text style={styles.amcTxt}>Your AMC is expired</Text>
          </View>

          {/* PDF View */}
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.pdfView, {flex: 1, marginTop: 25}]}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/pdf_icon.png')}
                  style={styles.pdfImg}
                />
                <Text style={[styles.pdfTxt, {marginStart: 5}]}>
                  Terms & Conditions
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.pdfView, {flex: 1, marginTop: 25}]}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/pdf_icon.png')}
                  style={styles.pdfImg}
                />
                <Text style={[styles.pdfTxt, {marginStart: 10}]}>
                  PMS Schedule
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* service Date View */}

          <View style={{flexDirection: 'row'}}>
            <View style={styles.calendarView}>
              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.calendarTxt}>Last Service Date</Text>
                  <Image
                    source={require('../../../assets/images/Layer.png')}
                    style={styles.calendarImg}
                  />
                </View>
                <View>
                  <Text style={styles.dateTxt}>25 / 08 /2023</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.calendarView}>
              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.calendarTxt}>Upcoming Service Date</Text>
                  <Image
                    source={require('../../../assets/images/Layer.png')}
                    style={styles.calendarImg}
                  />
                </View>
                <View>
                  <Text style={styles.dateTxt}>02 to 15 July, 2023</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Warranty Status */}

          <View style={{paddingStart: 18, marginTop: 15}}>
            <ImageBackground
              source={require('../../../assets/images/Subtract1.png')}
              style={styles.warrantyCardView}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 0.4}}>
                <View style={styles.maintenanceView}>
                  <Text
                    style={[
                      styles.maintenanceTxt,
                      {color: '#EC581F', fontWeight: '800'},
                    ]}>
                    Warranty Status :
                  </Text>
                  <Text
                    style={[
                      styles.expiredTxt,
                      {color: '#139E10', fontWeight: '800'},
                    ]}>
                    {' '}
                    Running
                  </Text>
                </View>
                <Image
                  source={require('../../../assets/images/car.png')}
                  style={styles.carImg}
                />
              </View>

              <View style={{flex: 0.2, flexDirection: 'column'}}>
                <View style={{marginStart: 15}}>
                  <Text style={styles.parkingTxt}>2-Post Parking Systems</Text>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.parkingTxt}>Expiry Date: </Text>
                    <Text style={styles.parkingTxt}>25/08/2023</Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.parkingTxt}>Warranty Type: </Text>
                    <Text style={styles.parkingTxt}>Comprehensive</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Warranty;
