import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';
import {ICONS} from '../../constants/icons';

const Shop = ({navigation}) => {
  const isConnected = useNetworkStatus();

  return (
    <View style={styles.main}>
      {/* HeaderView */}
      <CustomHeaderAdd
        navigation={navigation}
        title={'My shop'}
        icon={ICONS.notification_icon}
        // redirect={ADD_TAXES}
      />

      {/* product Item  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{margin: 15}}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.shopView, {flex: 0.5}]}>
              <Image
                source={require('../../../assets/images/elevator.png')}
                style={styles.productImg}
              />
              <Text style={{color: 'red', fontSize: 12}}>
                Jorem ipsum dolor sit
              </Text>
              <Text style={styles.detailTxt}>
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum
                dolor sit amet
              </Text>

              <TouchableOpacity>
                <View style={styles.detailBtn}>
                  <Text style={{color: '#fff'}}>View Details</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={[styles.shopView, {flex: 0.5}]}>
              <Image
                source={require('../../../assets/images/elevator.png')}
                style={styles.productImg}
              />
              <Text style={{color: 'red', fontSize: 12}}>
                Jorem ipsum dolor sit
              </Text>
              <Text style={styles.detailTxt}>
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum
                dolor sit amet
              </Text>

              <TouchableOpacity>
                <View style={styles.detailBtn}>
                  <Text style={{color: '#fff'}}>View Details</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Shop;
