import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button,Text } from 'react-native';
// import { Linking } from 'react-native';
import { basicUrl } from '../basicUrl';
const {updateVolunteer} = require('../service');

import axios from 'axios';
 
const handleUpdate = () => {
const Details = () => {
  const [recipientId, setRecipientId] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [kindOfHelp, setKindOfHelp] = useState('');
  const [branch, setBranch] = useState('');
  const [needDisabledVehicle, setNeedDisabledVehicle] = useState('');
};

  const handleSignup = () => {
    const recipientData = {

        recipientId: recipientId,
        recipientName: recipientName,
        dateOfBirth:dateOfBirth,
        phone: phone,
        email:email,
        address: address,     
        city: city,
        kindOfHelp: kindOfHelp,
        branch: branch,
        needDisabledVehicle: needDisabledVehicle

    };

    console.log(volunteerData);
    updateVolunteer(basicUrl + 'recipients/' + recipientId, recipientData);
};

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };
    

  return (
    <View style={styles.container}>
      {!isEditMode ? (
        <>
          <Button title="עדכן/י פרטים אישיים" onPress={handleEdit} />
          <Text>תעודת זהות: {recipientId}</Text>
          <Text>שם מלא: {recipientName}</Text>
          <Text>תאריך לידה {dateOfBirth}</Text>
          <Text>פלאפון: {phone}</Text>
          <Text>אימייל: {email}</Text>
          <Text>כתובת: {address}</Text>
          <Text>עיר: {city}</Text>
          <Text>סוג התנדבות: {kindOfHelp}</Text>
          <Text>סניף: {branch}</Text>
          <Text>האם צריך רכב נכים: {needDisabledVehicle}</Text>
        </>
      ) : (
        <>
          <br></br>
      <TextInput
        style={styles.input}
        placeholder="תעודת זהות"
        value={recipientId}
        onChangeText={setRecipientId}
      />
      <TextInput
        style={styles.input}
        placeholder="שם מלא"
        value={recipientName}
        onChangeText={setRecipientName}
      />
      <TextInput
        style={styles.input}
        placeholder="תאריך לידה"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
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
      <TextInput
        style={styles.input}
        placeholder="סוג התנדבות"
        value={kindOfHelp}
        onChangeText={setKindOfHelp}
      />
        <TextInput
        style={styles.input}
        placeholder="סניף"
        value={branch}
        onChangeText={setBranch}
      />
        <TextInput
        style={styles.input}
        placeholder="האם צריך רכב נכים"
        value={needDisabledVehicle}
        onChangeText={setNeedDisabledVehicle}
      />
      
          <Button title="עדכן" onPress={handleUpdate} />
          <Button title="ביטול" onPress={handleCancel} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'hsl(124, 93%, 61%);',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign:  'center',
    fontWeight: 'bold',
  },
});

export default Details;