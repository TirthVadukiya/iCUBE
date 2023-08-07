import { View, Text,ImageBackground,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import styles from '.'
import Icon from 'react-native-vector-icons/Ionicons';


const Profile = ({navigation}) => {
  return (
    <View style={styles.main}>

      {/* header */}
     
     <View style={{height: 190,}}>
        <ImageBackground
          source={require('../../../assets/images/BookService.png')}
          style={styles.serviceImg}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate("home")}  style={styles.BackBtn}>
                <Image
                  source={require('../../../assets/images/arrowBack.png')}
                  style={styles.arrowBackBtn}
                />    
            </TouchableOpacity>

            <View>
              <Text style={styles.headerBarTxt}>My Profile</Text>
            </View>

            <View style={{left: 32}}>
              <Icon name="notifications" size={28} color={'#EC581F'} />
            </View>
          </View>
        </ImageBackground>

        <View style={{marginLeft:130,bottom:90}}>
        <Image source={require("../../../assets/images/UserImage.png")} style={{height:80,width:80}}/>
        <Text style={styles.profileTxt}>Jainil Bhatt</Text>
      </View>
      </View>

      {/* UserDetail */}
 
     <ScrollView showsVerticalScrollIndicator={false}  style={{marginTop:15}}>
       <View style={styles.ProfileView}>
         <View style={styles.ProfileInfo}>
          <Text style={styles.profileInfoTxt}>Profile Information</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("EditProfile")}>
            <Image source={require("../../../assets/images/player.png")} style={{resizeMode:"contain",height:50,width:50}}/>
          </TouchableOpacity>
         </View>

         {/* Details */}
 
     <View style={{margin:10,marginHorizontal:20}}>
      <View style={{marginTop:10}}>
        <Text style={styles.DetailTxt}>Mobile  Number</Text>
        <Text  style={styles.DetailTxt1}>7248 800921</Text>
      </View>

      <View style={{marginTop:10}}>
        <Text style={styles.DetailTxt}>Primary Email Address</Text>
        <Text  style={styles.DetailTxt1}>info@jainilbhatt.com</Text>
      </View>

      <View style={{marginTop:10}}>
        <Text style={styles.DetailTxt}>City / Zip</Text>
        <Text  style={styles.DetailTxt1}>Ahmedabad - 380009</Text>
      </View>

      <View style={{marginTop:10}}>
        <Text style={styles.DetailTxt}>Address</Text>
        <Text  style={styles.DetailTxt1}>316, Akshar Complex, Opp. Kalupur Commercial Bank, Shivranjani Cross Roads, Satellite, Ahmedabad, Gujarat-380015.</Text>
      </View>

      <View style={{marginTop:10}}>
        <Text style={styles.DetailTxt}>Occupation</Text>
        <Text  style={styles.DetailTxt1}>Motion picture projectionist</Text>
      </View>

      <View style={{marginTop:10}}>
        <Text style={styles.DetailTxt}>Own car 1</Text>
        <Text  style={styles.DetailTxt1}>Toyota Innova Crysta</Text>
      </View>

       <View style={{marginTop:10}}>
        <Text style={styles.DetailTxt}>Own car 2</Text>
        <Text  style={styles.DetailTxt1}>Hyundai Creta</Text>
      </View>

      </View>

       </View>
     </ScrollView>

    </View>
  )
}

export default Profile