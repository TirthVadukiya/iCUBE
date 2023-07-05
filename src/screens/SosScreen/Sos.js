import { View, Text,Image,ImageBackground,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '.'
import Icon from 'react-native-vector-icons/Ionicons';
import {Checkbox} from 'react-native-paper';


const Sos = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);


  return (
    <View style={styles.main} >
       {/* Header */}

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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.ProfileImg}>
                <Image
                  source={require('../../../assets/images/arrowBack.png')}
                  style={styles.arrowBackBtn}
                />
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.headerBarTxt}>Emergency Contact</Text>
            </View>

            <View style={{left: 10}}>
              <Icon name="notifications" size={28} color={'#EC581F'} />
            </View>
          </View>
        </ImageBackground>

        <View style={{marginLeft:130,bottom:90}}>
        <Image source={require("../../../assets/images/sos.png")} style={{height:81.2,width:80}}/>
      </View>
      </View>
 

     {/* CheckBox */}

     <ScrollView>

     <View style={styles.checkBox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color={'#EC581F'}
        />
        <Text style={styles.checkBoxTxt}>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</Text>
      </View>

      <View style={styles.checkBox}>
        <Checkbox
          status={checked1 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked1(!checked1);
          }}
          color={'#EC581F'}
        />
        <Text style={styles.checkBoxTxt}>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</Text>
      </View>

      <View style={styles.checkBox}>
        <Checkbox
          status={checked2 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked2(!checked2);
          }}
          color={'#EC581F'}
        />
        <Text style={styles.checkBoxTxt}>Borem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>

      <View style={styles.checkBox}>
        <Checkbox
          status={checked3 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked3(!checked3);
          }}
          color={'#EC581F'}
        />
        <Text style={styles.checkBoxTxt}>Borem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>

      <View style={styles.checkBox}>
        <Checkbox
          status={checked4 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked4(!checked4);
          }}
          color={'#EC581F'}
        />
        <Text style={styles.checkBoxTxt}>Borem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>

      <View style={styles.checkBox}>
        <Checkbox
          status={checked5 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked5(!checked5);
          }}
          color={'#EC581F'}
        />
        <Text style={styles.checkBoxTxt}>Borem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      </ScrollView>

    </View>
  )
}

export default Sos