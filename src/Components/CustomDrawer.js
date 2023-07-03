import React from 'react';
import {
  DrawerContentScrollView,
 
} from '@react-navigation/drawer';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

function CustomDrawer({props, navigation}) {
  return (
    <DrawerContentScrollView style={{backgroundColor: '#F5F5F5'}} {...props}>
      {/* Profile Detail */}
      <View style={{left: 20, marginTop: 20}}>
        <Image
          source={require('../../assets/images/UserImage.png')}
          style={styles.ProfileImg}
        />
        <View style={styles.ProfileTxtView}>
          <Text style={styles.ProfileTxt}>Jainil Bhatt</Text>
          <TouchableOpacity>
            <View style={styles.ProfileShowDetail}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: '#FFF',
                  fontFamily: 'Raleway-SemiBold',
                }}>
                View Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ViewLine}></View>

      {/* DrawerTabScreen */}

      <View style={{padding: 18, flex: 1}}>
        <TouchableOpacity style={{marginBottom: 10}}>
          <Text style={styles.DrawerTxt}>Our Product</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 10}}>
          <Text style={styles.DrawerTxt}>My Product</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 10}}>
          <Text style={styles.DrawerTxt}>Warranty & Maintenance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 10}}>
          <Text style={styles.DrawerTxt}>Book Service</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 10}}>
          <Text style={styles.DrawerTxt}>My Shop</Text>
        </TouchableOpacity>
      </View>

   
      <TouchableOpacity style={styles.LogoutBtn}>
        {/* <View style={styles.LogoutBtn}> */}
          <Image
            source={require('../../assets/images/logoutLogo.png')}
            style={{resizeMode: 'center',right:5}}
          />
          <Text style={styles.logoutBtnTxt}>Logout</Text>
        {/* </View> */}
      </TouchableOpacity>
     
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  ProfileImg: {
    height: 62,
    width: 61,
    resizeMode: 'contain',
  },
  ProfileTxtView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ProfileTxt: {
    color: '#343434',
    fontSize: 18,
    fontWeight: '600',
    right: 25,
    fontFamily: 'Lato-Bold',
  },
  ProfileShowDetail: {
    backgroundColor: '#EC581F',
    height: 25,
    width: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewLine: {
    height: 1,
    width: 260,
    backgroundColor: '#EDEDED',
    margin: 10,
  },
  LogoutBtn: {
    backgroundColor: '#EC581F',
    height: 45,
    width: 155,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',flexDirection:'row',marginTop:"100%",left:15
  },
  DrawerTxt: {
    color: '#EC581F',
    fontWeight: '600',
    fontFamily: 'Raleway-Medium',
  },
  logoutBtnTxt: {
    color: '#FFF',
    fontSize: 22,
    right: 14,
    fontFamily: 'PragatiNarrow-Regular',
  },
});

export default CustomDrawer;