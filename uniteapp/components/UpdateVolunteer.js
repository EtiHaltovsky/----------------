// import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { basicUrl } from './basicUrl';
const { addVolunteer, updateVolunteer } = require('./service');

const Details = () => {
  const [volunteerId, setVolunteerId] = useState('');
  const [volunteerName, setVolunteerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [fieldOfVolunteering, setFieldOfVolunteering] = useState('');
  const [branch, setBranch] = useState('');
  const [disabledVehicle, setDisabledVehicle] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

//   const handleSignup = () => {
//     const volunteerData = {
//       volunteerId: volunteerId,
//       volunteerName: volunteerName,
//       phone: phone,
//       email: email,
//       address: address,
//       city: city,
//       fieldOfVolunteering: fieldOfVolunteering,
//       branch: branch,
//       disabledVehicle: disabledVehicle,
//     };

//     console.log(volunteerData);
//     addVolunteer(basicUrl + 'volunteers/', volunteerData);
//   };

  const handleUpdate = () => {
    const volunteerData = {
      volunteerId: volunteerId,
      volunteerName: volunteerName,
      phone: phone,
      email: email,
      address: address,
      city: city,
      fieldOfVolunteering: fieldOfVolunteering,
      branch: branch,
      disabledVehicle: disabledVehicle,
    };

    console.log(volunteerData);
    updateVolunteer(basicUrl + 'volunteers/' + volunteerId, volunteerData);
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
          <Text>תעודת זהות: {volunteerId}</Text>
          <Text>שם מלא: {volunteerName}</Text>
          <Text>פלאפון: {phone}</Text>
          <Text>אימייל: {email}</Text>
          <Text>כתובת: {address}</Text>
          <Text>עיר: {city}</Text>
          <Text>תחום התנדבות: {fieldOfVolunteering}</Text>
          <Text>סניף: {branch}</Text>
          <Text>האם יש רכב נכים: {disabledVehicle}</Text>
        </>
      ) : (
        <>
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
          <TextInput
            style={styles.input}
            placeholder="תחום התנדבות"
            value={fieldOfVolunteering}
            onChangeText={setFieldOfVolunteering}
          />
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