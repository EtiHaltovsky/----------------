import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Picker,Image } from 'react-native';
// import { Linking } from 'react-native';
import { basicUrl } from '../basicUrl';
const { addVolunteer } = require('../service');
// const { getAllVolunteers } = require('../service');
const { getData,updateVolunteer } = require('../service');

// import axios from 'axios';

const details = () => {
  const [volunteerId, setVolunteerId] = useState('');
  const [volunteerName, setVolunteerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [fieldOfVolunteering, setFieldOfVolunteering] = useState('');
  const [branch, setBranch] = useState('');
  const [disabledVehicle, setDisabledVehicle] = useState('');


  const handleSignup = () => {
    const volunteerData = {

      volunteerId: volunteerId,
      volunteerName: volunteerName,
      phone: phone,
      email: email,
      address: address,
      city: city,
      fieldOfVolunteering: fieldOfVolunteering,
      branch: branch,
      disabledVehicle: disabledVehicle

    };

   
    console.log(volunteerData);
    addVolunteer(basicUrl + 'volunteers/', volunteerData);
  }

  const handlePress = () => {
    
     
   const da= getData(basicUrl + 'volunteers/');
      if (da) {
     console.log('good!')
      } else {
        console.log('couldnt get data');
      }
    };

    const updatePress = () => {
    
   const da= updateVolunteer(basicUrl + 'volunteers/');
      if (da) {
     console.log('update!')
     alert('update!');

      } else {
        console.log('couldnt update details');
        alert('couldnt update details');
      }
    };
  return (

    <View style={styles.container}>
      {/* <Image source={require('./path/to/image.png')} style={styles.logo} /> */}
      <br></br>
      <Button title="הכנס/י פרטים אישיים" />
      <br></br>
      <TextInput
        style={styles.input}
        placeholder="תעודת זהות"
        value={volunteerId}
        onChangeText={setVolunteerId}
      />
      <TextInput
        style={styles.input}
        placeholder="שם מלא"
        value={volunteerName}
        onChangeText={setVolunteerName}
      />
      <TextInput
        style={styles.input}
        placeholder="פלאפון"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="אימייל"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="כתובת"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="עיר"
        value={city}
        onChangeText={setCity}
      />

      <Picker
        selectedValue={fieldOfVolunteering}
        onValueChange={(itemValue) => setFieldOfVolunteering(itemValue)}
      >
        <Picker.Item label="תחום התנדבות" value="" />
        <Picker.Item label="הסעות חולים" value="הסעות חולים" />
        <Picker.Item label="גיהוץ למשפחות" value="גיהוץ למשפחות" />
        <Picker.Item label="העברת חבילות" value="העברת חבילות" />
        <Picker.Item label="חלוקת אוכל" value="חלוקת אוכל" />
        <Picker.Item label="שמירה על ילדים בבתי חולים" value="שמירה על ילדים בבתי חולים" />
        <Picker.Item label="עריכת קניות למשפחותיהם" value="	עריכת קניות למשפחותיהם" />
        <Picker.Item label="השאלת ציוד רפואי" value="השאלת ציוד רפואי" />
        <Picker.Item label="סיוע לחולים בבתיהם " value="סיוע לחולים בבתיהם " />
        <Picker.Item label="סיעוד ותמיכה בקשישים" value="סיעוד ותמיכה בקשישים" />
      </Picker>


      <TextInput
        style={styles.input}
        placeholder="סניף"
        value={branch}
        onChangeText={setBranch}
      />
      <TextInput
        style={styles.input}
        placeholder="האם יש רכב נכים"
        value={disabledVehicle}
        onChangeText={setDisabledVehicle}
      />

      <br></br>
      <Button title="הירשם" onPress={handleSignup} />
      <br></br>
      <Button title="הצג את כל המתנדבים" onPress={handlePress}/>
      <br></br>
      <Button title="לעדכון" onPress={updatePress}/>

    </View>
  );



};

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'hsl(124, 93%, 61%);'
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    // direction:'rtl',
    textAlign: 'center',
    // fontSize:'Fantasy  ',
    fontWeight: 'bold'

  },
  button: {
    width: '80px',
    height: '80px'
  },

});
export default details;








