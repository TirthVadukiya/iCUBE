import { View, Text,TouchableOpacity,Image,ImageBackground,ScrollView } from 'react-native'
import React from 'react'
import styles from '.'
import Icon from 'react-native-vector-icons/Ionicons';


const Product = ({navigation}) => {
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
           <Text style={styles.headerBarTxt}>My Product</Text>
          </View>

          <View style={{left: 25}}>
            <Icon name="notifications" size={28} color={'#EC581F'} />
          </View>
        </View>
      </View>

      {/* productView */}

      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>

      <View style={{marginTop:30}}>
       <ImageBackground source={require("../../../assets/images/Subtract.png")} style={{height:180,width:350,left:5}}>
        
      <View style={{alignItems:"flex-end"}}>
       <Image source={require("../../../assets/images/car.png")} style={styles.CarImg}/> 
       </View>
         <View style={styles.WarrantyCardTxt}>
          <Text style={styles.WarrantyTxt1}>JUHGT056525</Text>
          
         </View>  

         <View style={{left:20,bottom:85}}>
          <Text style={styles.Text1}>2-Post Parking Systems</Text>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={styles.Text1}>Date Of Handover: </Text>
          <Text style={styles.Text3}>25/08/2023</Text>
          </View>
          <Text style={styles.Text1}>Max Rated Load:  1800 KG</Text>
         </View>

       </ImageBackground>
      </View>

      {/* product Video */}
        
      <ImageBackground source={require("../../../assets/images/carpark.png")} style={{height:180,width:330,left:12,borderRadius:20,overflow:"hidden"}}>
          <TouchableOpacity style={{marginTop:140,width:27,marginLeft:280}}>
            <Image source={require("../../../assets/images/VideoIcon.png")} style={{resizeMode:"contain",height:27,width:27}}/>
          </TouchableOpacity>
      </ImageBackground>

        {/* termsBtn */}

        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={styles.termBtn}>
          <Image source={require("../../../assets/images/PdfIcon1.png")} style={styles.pdfImg}/>
          <Text style={styles.termTxt}>Terms & Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.termBtn}>
        <Image source={require("../../../assets/images/PdfIcon1.png")} style={styles.pdfImg}/>
          <Text style={styles.termTxt}>PMS Schedule</Text>
        </TouchableOpacity>
       </View>

       <View style={{flexDirection:"row",marginBottom:20}}>
        <TouchableOpacity style={styles.termBtn}>
        <Image source={require("../../../assets/images/PdfIcon1.png")} style={styles.pdfImg}/>
          <Text style={styles.termTxt}>Terms & Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.termBtn}>
        <Image source={require("../../../assets/images/PdfIcon1.png")} style={styles.pdfImg}/>
          <Text style={styles.termTxt}>PMS Schedule</Text>
        </TouchableOpacity>
       </View>
       </ScrollView>

    </View>
  )
}

export default Product