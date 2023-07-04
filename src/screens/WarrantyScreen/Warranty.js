import { View, Text,TouchableOpacity,Image,ImageBackground } from 'react-native'
import React from 'react'
import styles from '.'
import Icon from 'react-native-vector-icons/Ionicons';


const Warranty = ({navigation}) => {
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <View style={styles.ProfileImg}> */}
            <Image
              source={require('../../../assets/images/arrowBack.png')}
              style={styles.arrowBackBtn}
            />
            {/* </View> */}
          </TouchableOpacity>

          <View>
           <Text style={styles.headerBarTxt}>Warranty & Maintenance</Text>
          </View>

          <View style={{left: 10}}>
            <Icon name="notifications" size={28} color={'#EC581F'} />
          </View>
        </View>
      </View>

     {/* warrantyCard */}
   
      <View style={{marginTop:30}}>
       <ImageBackground source={require("../../../assets/images/Subtract.png")} style={{height:180,width:350,left:5}}>
        
      <View style={{alignItems:"flex-end"}}>
       <Image source={require("../../../assets/images/car.png")} style={styles.CarImg}/> 
       </View>
         <View style={styles.WarrantyCardTxt}>
          <Text style={styles.WarrantyTxt1}>Maintenance Status:</Text>
          <Text style={styles.WarrantyTxt2}> Expired</Text>
         </View>  

         <View style={{left:20,bottom:100}}>
          <Text style={styles.Text1}>2-Post Parking Systems</Text>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={styles.Text1}>Expiry Date: </Text>
          <Text style={styles.Text3}>25/08/2023</Text>
          </View>
          <Text style={styles.Text1}>Maintenance Type: Comprehensive</Text>
         </View>

       </ImageBackground>
      </View>

      {/* expired Card */}

     <View style={styles.expiredCard}>
      <Text style={styles.expiredTxt}>Your AMC is expired</Text>
     </View>

     {/* termsBtn */}

       <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={styles.termBtn}>
          <Image source={require("../../../assets/images/pdfIcon.png")} style={{resizeMode:"center"}}/>
          <Text style={styles.termTxt}>Terms & Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.termBtn}>
          <Image source={require("../../../assets/images/pdfIcon.png")} style={{resizeMode:"center"}}/>
          <Text style={styles.termTxt}>PMS Schedule</Text>
        </TouchableOpacity>
       </View>
 
    {/* serviceDetail */}

       <View style={{flexDirection:"row"}}>
        <View style={styles.serviceBtn}>
         <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <Text style={styles.serviceTxt}>Last Service Date</Text>
          <Image source={require("../../../assets/images/Layer.png")} style={{resizeMode:'center'}}/>
         </View>
         <Text style={styles.serviceTxt1}>25 / 08 /2023</Text>
        </View>

        <View style={styles.serviceBtn}>
        <View style={styles.serviceBtn}>
         <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <Text style={styles.serviceTxt}>Upcoming Service Date</Text>
          <Image source={require("../../../assets/images/Layer.png")} style={{resizeMode:'center'}}/>
         </View>
         <Text style={styles.serviceTxt2}>02 to 15 July, 2023</Text>
        </View>
        </View>
       </View>

       {/* Warranty */}

       <View style={{marginTop:30}}>
       <ImageBackground source={require("../../../assets/images/Subtract1.png")} style={{height:180,width:350,left:5}}>
        
      <View style={{alignItems:"flex-end"}}>
       <Image source={require("../../../assets/images/car.png")} style={styles.CarImg}/> 
       </View>
         <View style={styles.WarrantyCardTxt}>
          <Text style={styles.WarrantyCardTxt1}>Warranty Status:</Text>
          <Text style={styles.WarrantyCardTxt2}> Running</Text>
         </View>  

         <View style={{left:20,bottom:100}}>
          <Text style={styles.Text1}>2-Post Parking Systems</Text>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={styles.Text1}>Expiry Date: </Text>
          <Text style={styles.Text3}>25/08/2023</Text>
          </View>
          <Text style={styles.Text1}>Maintenance Type: Comprehensive</Text>
         </View>

       </ImageBackground>
      </View>

   </View>
     
  )
}

export default Warranty