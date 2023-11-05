import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Picker } from 'react-native';
import { basicUrl } from '../basicUrl';
const { addVolunteer } = require('../service');
import { useNavigation } from '@react-navigation/native';
//  const navigation = useNavigation();
//import { useNavigation } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';


const RegistrationForm = () => {
   

   
    const [volunteerId, setVolunteerId] = useState('');
    const [volunteerName, setVolunteerName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    const [fieldOfVolunteering, setFieldOfVolunteering] = useState('');
    const [branch, setBranch] = useState('');
    const [disabledVehicle, setDisabledVehicle] = useState('');
 const navigation = useNavigation();

    const handleRegistration = () => {
            
        const volunteerData = {

            volunteerId: volunteerId,
            volunteerName: volunteerName,
            phone: phone,
            email: email,
            password:password,
            address: address,
            // city: city,
            fieldOfVolunteering: fieldOfVolunteering,
            branch: branch,
            disabledVehicle: disabledVehicle

        };
        addVolunteer(basicUrl + 'volunteers/', volunteerData)
        .then(result => {
            console.log(result);
            if(result==true)
            navigation.navigate('LanguageSelection');
          })
        // navigation.navigate('handleRegistration')
        // navigation.navigate('LanguageSelection')

      };

    return (
        <View style={styles.container}>
            <Image source={require('/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>הרשמה</Text>
            <TextInput
                style={styles.input}
                placeholder="שם משתמש"
                value={volunteerName}
                onChangeText={setVolunteerName}
            />
            <TextInput
                style={styles.input}
                placeholder="תעודת זהות"
                value={volunteerId}
                onChangeText={setVolunteerId}
            />
            <TextInput
                style={styles.input}
                placeholder="פלאפון"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                placeholder="מייל"
                value={email}
                onChangeText={setEmail}
            />
             <TextInput
                style={styles.input}
                placeholder="סיסמא"
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="כתובת"
                value={address}
                onChangeText={setAddress}
            />
            {/* <TextInput
                style={styles.input}
                placeholder="עיר"
                value={city}
                onChangeText={setCity}
            /> */}
        
            <Picker
             style={styles.input}
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

            <Picker
             style={styles.input}
                selectedValue={branch}
                onValueChange={(itemValue) => setBranch(itemValue)}
            >
                <Picker.Item label="סניף" value="" />
                <Picker.Item label="אשדוד" value="אשדוד" />
                <Picker.Item label="בני ברק" value="בני ברק" />
                <Picker.Item label="ירושלים" value="ירושלים" />
                <Picker.Item label="רחובות" value="רחובות" />
                <Picker.Item label="אלעד" value="אלעד" />
                <Picker.Item label="בית שמש" value="בית שמש" />
                <Picker.Item label="אשקלון" value="אשקלון" />
                <Picker.Item label="אופקים " value="אופקים " />
                <Picker.Item label="קרית ספר" value="קרית ספר" />
                <Picker.Item label="חיפה" value="חיפה" />
                <Picker.Item label="פתח תקוה" value="פתח תקוה" />
                <Picker.Item label="נתניה" value="נתניה" />
                <Picker.Item label="באר שבע" value="באר שבע" />
                <Picker.Item label="ראשון לציון " value="ראשון לציון" />
                <Picker.Item label="ביתר עילית" value="ביתר עילית" />
                <Picker.Item label="ערד" value="ערד" />
                <Picker.Item label="צפת" value="צפת" />
                <Picker.Item label="מירון" value="מירון" />
                <Picker.Item label="קרית גת" value="קרית גת" />
               
            </Picker>
{/* 
            <TextInput
                style={styles.input}
                placeholder="האם יש רכב נכים"
                value={disabledVehicle}
                onChangeText={setDisabledVehicle}
            /> */}
<Picker
             style={styles.input}
                selectedValue={disabledVehicle}
                onValueChange={(itemValue) => setDisabledVehicle(itemValue)}
            >
                <Picker.Item label="האם יש רכב נכים?" value="" />
                <Picker.Item label="כן" value="1" />
                <Picker.Item label="לא" value="0" />
            </Picker>


<TouchableOpacity style={styles.button} onPress={handleRegistration}>
  <Text style={styles.buttonText}>הרשמה</Text>
</TouchableOpacity>
{/* 
            <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('handleRegistration')}>
                <Text style={styles.buttonText}>הרשמה</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 150,
        // marginBottom: 20,
    },
    title: {
        fontSize: 1,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '20%',
        height: 40,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        text: 'rtl',
        borderRadius: 5, 
  },
    button: {
        width: '20%',
        height: 30,
        backgroundColor: '#FFC0CB',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
};

export default RegistrationForm;
