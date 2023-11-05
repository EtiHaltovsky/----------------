import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import Button from 'react-native-button';
import {AppStyles} from '../AppStyles';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {login} from '../reducers';

function SignupScreen({navigation}) {

  const [volunteerId, setVolunteerId] = useState('');
  const [volunteerName, setVolunteerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [fieldOfVolunteering, setFieldOfVolunteering] = useState('');
  const [branch, setBranch] = useState('');
  const [disabledVehicle, setDisabledVehicle] = useState('');
  const dispatch = useDispatch();

  const onRegister = () => {
    // auth()
     createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const data = {
          volunteerId:volunteerId,
          volunteerName:volunteerName,
          phone:phone,
          email:email,
          address:address,
          city:city,
          fieldOfVolunteering:fieldOfVolunteering,
          branch:branch,
          disabledVehicle:disabledVehicle,
          appIdentifier: 'rn-android-universal-listings',
        };
        const user_uid = response.user._user.uid;
        firestore().collection('users').doc(user_uid).set(data);
        firestore()
          .collection('users')
          .doc(user_uid)
          .get()
          .then(function (user) {
            dispatch(login(user.data()));
            navigation.navigate('DrawerStack', {user});
          })
          .catch(function (error) {
            const {code, message} = error;
            Alert.alert(message);
          });
      })
      .catch((error) => {
        const {code, message} = error;
        Alert.alert(message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
     
       <View style={styles.InputContainer}>
       <TextInput
        style={styles.input}
        placeholder="תעודת זהות"
        value={volunteerId}
        onChangeText={setVolunteerId}
      />
      </View>
      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        placeholder="שם מלא"
        value={volunteerName}
        onChangeText={setVolunteerName}
      />
      </View>
      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        placeholder="פלאפון"
        value={phone}
        onChangeText={setPhone}
      />

      </View>
      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        placeholder="אימייל"
        value={email}
        onChangeText={setEmail}
      />
      </View>

      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        placeholder="כתובת"
        value={address}
        onChangeText={setAddress}
      />
      </View>
      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        placeholder="עיר"
        value={city}
        onChangeText={setCity}
      />
      </View>
      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        placeholder="תחום התנדבות"
        value={fieldOfVolunteering}
        onChangeText={setFieldOfVolunteering}
      />
      </View>
      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        placeholder="סניף"
        value={branch}
        onChangeText={setBranch}
      />
      </View>
      <View style={styles.InputContainer}>
      <TextInput
        style={styles.input}
        placeholder="האם יש רכב נכים"
        value={disabledVehicle}
        onChangeText={setDisabledVehicle}
      />

      </View>
      <TouchableOpacity
        style={[styles.facebookContainer, {marginTop: 50}]}
        onPress={() => onRegister()}>
        <Text style={styles.facebookText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
});

export default SignupScreen;
