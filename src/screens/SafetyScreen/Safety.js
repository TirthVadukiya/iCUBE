import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
import React from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/Ionicons';

const Safety = ({navigation}) => {
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
            <Image
              source={require('../../../assets/images/IcubeLogo.png')}
              style={{height: 36, width: 138}}
            />
          </View>

          <View style={{left: 10}}>
            <Icon name="notifications" size={28} color={'#EC581F'} />
          </View>
        </View>
      </View>

      {/* Videos */}
   
     <ScrollView style={{flex:1}}>
      <View style={{margin: 10, flexDirection: 'row'}}>
        <ImageBackground
          source={require('../../../assets/images/carVideo.png')}
          style={{height: 115, width: 168}}>
          <TouchableOpacity style={styles.videoPlayBtn}>
            <Image
              source={require('../../../assets/images/playBtn.png')}
              style={{resizeMode: 'center'}}
            />
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground
          source={require('../../../assets/images/carVideo.png')}
          style={{height: 115, width: 168, left: 5}}>
          <TouchableOpacity style={styles.videoPlayBtn}>
            <Image
              source={require('../../../assets/images/playBtn.png')}
              style={{resizeMode: 'center'}}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={{left: 10}}>
        <ImageBackground
          source={require('../../../assets/images/carVideo.png')}
          style={{height: 115, width: 168}}>
          <TouchableOpacity style={styles.videoPlayBtn}>
            <Image
              source={require('../../../assets/images/playBtn.png')}
              style={{resizeMode: 'center'}}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* SafetyPdf */}

      <Text style={styles.safetyPdfTxt}>Safety Manual PDF</Text>

      {/* pdf View */}

      <TouchableOpacity>
        <View style={styles.pdfView}>
          <View style={styles.PdfTxtView}>
            <Image source={require('../../../assets/images/pdf.png')} style={styles.pdfImg}/>
          </View>
          <Text style={styles.PdfTxt}>Jorem ipsum dolor sit Jorem ipsum </Text>
        </View>
        </TouchableOpacity>

       <TouchableOpacity>
        <View style={styles.pdfView}>
          <View style={styles.PdfTxtView}>
            <Image source={require('../../../assets/images/pdf.png')} style={styles.pdfImg}/>
          </View>
          <Text style={styles.PdfTxt}>Jorem ipsum dolor sit Jorem ipsum </Text>
        </View>
        </TouchableOpacity>

       <TouchableOpacity>
        <View style={styles.pdfView}>
          <View style={styles.PdfTxtView}>
            <Image source={require('../../../assets/images/pdf.png')} style={styles.pdfImg}/>
          </View>
          <Text style={styles.PdfTxt}>Jorem ipsum dolor sit Jorem ipsum </Text>
        </View>
        </TouchableOpacity>

       <TouchableOpacity>
        <View style={styles.pdfView}>
          <View style={styles.PdfTxtView}>
            <Image source={require('../../../assets/images/pdf.png')} style={styles.pdfImg}/>
          </View>
          <Text style={styles.PdfTxt}>Jorem ipsum dolor sit Jorem ipsum </Text>
        </View>
        </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

export default Safety;
