import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../assets/colors/colors';
import {IMAGES} from '../../constants/images';
import {ICONS} from '../../constants/icons';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';

const PRoductInfo = ({navigation}) => {
  const isConnected = useNetworkStatus();

  return (
    <View style={styles.main}>
      {/* header bar */}
      <CustomHeaderAdd
        navigation={navigation}
        title={'Product Information'}
        icon={ICONS.notification_icon}
        // redirect={ADD_TAXES}
      />

      {/* product Info */}

      <ScrollView style={{margin: 15}} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={IMAGES.product_info}
          style={styles.productInfoImg}>
          <View style={{marginTop: 100}}>
            <Text style={styles.parkingTxt}>2-Post Parking Systems</Text>
          </View>
          {/* Info Txt */}
        </ImageBackground>
        <View style={{marginStart: 10, marginEnd: 10}}>
          <Text style={styles.parkingInfoTxt}>
            A method of parking two cars on single floor space. Thus, parking
            space can be doubled
          </Text>
        </View>

        <View style={styles.installationView}>
          <Image source={ICONS.arrow_right} style={styles.arrowBack} />
          <Text style={styles.installationTxt}>Quick Installation</Text>
        </View>

        <View style={styles.installationView}>
          <Image source={ICONS.arrow_right} style={styles.arrowBack} />
          <Text style={styles.installationTxt}>
            Easy operation and low maintenance
          </Text>
        </View>

        <View style={styles.installationView}>
          <Image source={ICONS.arrow_right} style={styles.arrowBack} />
          <Text style={styles.installationTxt}>
            Advanced safety mechanism with a single-lock release system
          </Text>
        </View>

        <View style={styles.installationView}>
          <Image source={ICONS.arrow_right} style={styles.arrowBack} />
          <Text style={styles.installationTxt}>
            Ease of disassembling & high mobility
          </Text>
        </View>

        <View style={styles.installationView}>
          <Image source={ICONS.arrow_right} style={styles.arrowBack} />
          <Text style={styles.installationTxt}>
            Suitable for all personal vehicles parking at Villas, Apartments,
            Commercials buildings, etc.
          </Text>
        </View>

        <View style={styles.installationView}>
          <Image source={ICONS.arrow_right} style={styles.arrowBack} />
          <Text style={styles.installationTxt}>
            Security from car thefts and damage
          </Text>
        </View>

        <View style={{marginTop: 15, margin: 10}}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/carpark.png')}
              style={styles.carVideoView}>
              <Image source={ICONS.video_play} style={styles.playBtn} />
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productInfoBtn}>
            <Text style={styles.informationTxt}>More Information</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default PRoductInfo;
