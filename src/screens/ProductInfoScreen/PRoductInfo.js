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

const PRoductInfo = ({navigation}) => {
  return (
    <View style={styles.main}>
      {/* header bar */}
      <View style={styles.headerBarView}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate("OurProduct")}>
            <Image
              source={require('../../../assets/images/arrowBack.png')}
              style={styles.arrowBackBtn}
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.headerBarTxt}>Product Information</Text>
          </View>

          <View style={{left: 15}}>
            <Icon name="notifications" size={28} color={'#EC581F'} />
          </View>
        </View>
      </View>

      {/* ProductInfo */}

      <ScrollView style={{flex: 1, backgroundColor: COLORS.primary}}>
        <View style={styles.productView}>
          <View style={{alignItems: 'center', bottom: 55}}>
            <Image
              source={require('../../../assets/images/car.png')}
              style={styles.productImg}
            />
            <Text style={styles.productTxt}>2-Post Parking Systems</Text>
          </View>
        </View>

        {/* Information */}
       
       <View style={styles.productInfoView}>
        <Text style={styles.productInfoTxt}>A method of parking two cars on single floor space. Thus, parking space can be doubled</Text>
       </View>
          
       {/* InfoPoint */}

       <View style={styles.InfoView}>
        <Image source={require("../../../assets/images/ArrowRight.png")} style={styles.arrowIcon}/>
        <Text style={styles.InfoTxt}>Quick Installation</Text>
       </View>

       <View style={styles.InfoView}>
        <Image source={require("../../../assets/images/ArrowRight.png")} style={styles.arrowIcon}/>
        <Text style={styles.InfoTxt}> Easy operation and low maintenance</Text>
       </View>

       <View style={styles.InfoView}>
        <Image source={require("../../../assets/images/ArrowRight.png")} style={styles.arrowIcon}/>
        <Text style={styles.InfoTxt}>Advanced safety mechanism with a single-lock release system</Text>
       </View>

       <View style={styles.InfoView}>
        <Image source={require("../../../assets/images/ArrowRight.png")} style={styles.arrowIcon}/>
        <Text style={styles.InfoTxt}>Ease of disassembling & high mobility</Text>
       </View>

       <View style={styles.InfoView}>
        <Image source={require("../../../assets/images/ArrowRight.png")} style={styles.arrowIcon}/>
        <Text style={styles.InfoTxt}>Suitable for all personal vehicles parking at Villas, Apartments, Commercials buildings, etc.</Text>
       </View>

       <View style={styles.InfoView}>
        <Image source={require("../../../assets/images/ArrowRight.png")} style={styles.arrowIcon}/>
        <Text style={styles.InfoTxt}>Security from car thefts and damage</Text>
       </View>
 
        {/* product Video */}
        
      <ImageBackground source={require("../../../assets/images/carpark.png")} style={styles.ProductVideoImg}>
          <TouchableOpacity style={styles.ProductView}>
            <Image source={require("../../../assets/images/VideoIcon.png")} style={styles.playBtn}/>
          </TouchableOpacity>
      </ImageBackground>

        {/* InfoBtn */}

        <TouchableOpacity style={styles.InfoBtn}>
          <Text style={styles.InfoBtnTxt}>More Information</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default PRoductInfo;
