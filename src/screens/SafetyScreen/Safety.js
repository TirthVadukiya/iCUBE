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
import {IMAGES} from '../../constants/images';
import {ICONS} from '../../constants/icons';
import {useNetworkStatus} from '../../utils/NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';
import CustomHeaderAdd from '../../Components/CustomHeaderAdd';

const Safety = ({navigation}) => {
  const isConnected = useNetworkStatus();

  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* header bar */}
        <CustomHeaderAdd
          navigation={navigation}
          title={'Safety Manual'}
          icon={ICONS.notification_icon}
          // redirect={ADD_TAXES}
        />

        {/* Video view */}
        <View style={{flex: 0.5}}>
          <View style={{margin: 10, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1, marginEnd: 8}}>
              <ImageBackground
                source={IMAGES.car_video}
                style={styles.videoImg}>
                <Image source={ICONS.video_play} style={styles.videoPlayBtn} />
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 1, marginStart: 8}}>
              <ImageBackground
                source={IMAGES.car_video}
                style={styles.videoImg}>
                <Image source={ICONS.video_play} style={styles.videoPlayBtn} />
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={{margin: 10, flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1, marginEnd: 8}}>
              <ImageBackground
                source={IMAGES.car_video}
                style={styles.videoImg}>
                <Image source={ICONS.video_play} style={styles.videoPlayBtn} />
              </ImageBackground>
            </TouchableOpacity>

            <View style={{flex: 1, marginStart: 8}}></View>
          </View>
        </View>
        {/* 3 video */}

        {/* Safety Manual PDF */}
        <View style={{flex: 0.5}}>
          <View style={{margin: 10}}>
            <Text style={styles.pdfTxt}>Safety Manual PDF</Text>
          </View>

          <View style={{margin: 10}}>
            <TouchableOpacity>
              <View style={styles.pdfView}>
                <Image
                  source={require('../../../assets/images/pdf_icon.png')}
                  style={styles.pdfImg}
                />
                <Text style={styles.pdfViewTxt}>
                  Jorem ipsum dolor sit Jorem ipsum{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity st>
              <View style={styles.pdfView}>
                <Image
                  source={require('../../../assets/images/pdf_icon.png')}
                  style={styles.pdfImg}
                />
                <Text style={styles.pdfViewTxt}>
                  Jorem ipsum dolor sit Jorem ipsum{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.pdfView}>
                <Image
                  source={require('../../../assets/images/pdf_icon.png')}
                  style={styles.pdfImg}
                />
                <Text style={styles.pdfViewTxt}>
                  Jorem ipsum dolor sit Jorem ipsum{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.pdfView, {marginBottom: 15}]}>
                <Image
                  source={require('../../../assets/images/pdf_icon.png')}
                  style={styles.pdfImg}
                />
                <Text style={styles.pdfViewTxt}>
                  Jorem ipsum dolor sit Jorem ipsum{' '}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CustomDialogNetwork visible={!isConnected} />
    </View>
  );
};

export default Safety;
