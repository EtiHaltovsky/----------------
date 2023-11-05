import React, { useState } from 'react';
// import DatePicker from 'react-native-datepicker';
// import DatePicker from 'react-native-calendar-picker'
import DatePicker from 'react-native-modal-datetime-picker'
import { View, Text, Image, StyleSheet, TouchableOpacity, Picker, TextInput } from 'react-native';
import axios from 'axios';
import { basicUrl } from '../basicUrl';




// import 'react-native-datepicker/dist/styles.min.css';

const { addNewrequests } = require('../service');

const HelpRequestForm = () => {
  const [fieldOfVolunteering, setFieldOfVolunteering] = useState('');
  const [disabledVehicle, setDisabledVehicle] = useState('');
  const [firstAidKnowledge, setFirstAidKnowledge] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [preferredHours, setPreferredHours] = useState('');
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  // const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState('');

  const handleFormSubmit = async () => {
    try {
      // Create an object with the selected values
      const requestData = {
        fieldOfVolunteering: fieldOfVolunteering,
        disabledVehicle: disabledVehicle,
        firstAidKnowledge: firstAidKnowledge,
        selectedLanguage: selectedLanguage,
        selectedDay: selectedDay,
        preferredHours: preferredHours,
        from: from,
        destination: destination
      };



      console.log(requestData);
      // addNewrequests(basicUrl + 'newrequests/', requestData);
      // alert('נוספת בהצלחה! אשרייך!')
      // navigation.navigate('PersonalArea');


      // Send the data to the server
      await axios.post('http://localhost:8000/newrequests', requestData);

      console.log('Request submitted successfully');
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('/images/logo.png')} style={styles.image} />
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>סוג עזרה</Text>
          <Picker
            selectedValue={fieldOfVolunteering}
            onValueChange={(itemValue) => setFieldOfVolunteering(itemValue)}
            style={styles.picker}
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
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>האם צריך רכב נכים?</Text>
          <Picker
            selectedValue={disabledVehicle}
            onValueChange={(itemValue) => setDisabledVehicle(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="האם צריך רכב נכים?" value="" />
            <Picker.Item label="כן" value="1" />
            <Picker.Item label="לא" value="0" />
          </Picker>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>האם צריך מתנדב עם ידע בעזרה ראשונה?</Text>
          <Picker
            selectedValue={firstAidKnowledge}
            onValueChange={(itemValue) => setFirstAidKnowledge(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="?האם צריך מתנדב עם ידע בעזרה ראשונה" value="" />
            <Picker.Item label="כן" value="1" />
            <Picker.Item label="לא" value="0" />
          </Picker>

        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>האם צריך מתנדב שדובר אנגלית?</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="האם צריך מתנדב שדובר אנגלית?" value="" />
            <Picker.Item label="כן" value="1" />
            <Picker.Item label="לא" value="0" />
          </Picker>

        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>מהיכן רוצה להגיע</Text>
          <TextInput
            value={from}
            onChangeText={(text) => setFrom(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>לאן רוצה להגיע</Text>
          <TextInput
            value={destination}
            onChangeText={(text) => setDestination(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>בחר/י יום</Text>
          <Picker
            selectedValue={selectedDay}
            onValueChange={(itemValue) => setSelectedDay(itemValue)}
            style={styles.picker}
          >

            <Picker.Item label="בחר/י יום" value="" />
            <Picker.Item label="ראשון" value="ראשון" />
            <Picker.Item label="שני" value="שני" />
            <Picker.Item label="שלישי" value="שלישי" />
            <Picker.Item label="רביעי" value="רביעי" />
            <Picker.Item label="חמישי" value="חמישי" />
            <Picker.Item label="שישי" value="שישי" />
          </Picker>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>בחר/י שעה</Text>
          <Picker
            selectedValue={preferredHours}
            onValueChange={(itemValue) => setPreferredHours(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="בחר/י" value="" />

            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
          </Picker>
        </View>
        <View style={styles.formGroup}>

          <View>
            <Text>בחר תאריך:</Text>
            <DatePicker
              date={selectedDate}
              onDateChange={(newDate) => setSelectedDate(newDate)}
              style={styles.input}
            />
          </View>

          {/* <Text style={styles.label}>בחר/י תאריך</Text>
  <DatePicker
    date={selectedDate}
    onDateChange={(newDate) => setSelectedDate(newDate)}
    style={styles.datePicker}
    mode="date"
  /> */}
        </View>
        {/* <DatePicker
  style={{width: 200}}
  selectedDate={this.state.selectedDate}
  mode="date"
  placeholder="בחר תאריך"
  format="YYYY-MM-DD"
  minDate="1900-01-01"
  maxDate="2100-01-01"
  confirmBtnText="אישור"
  cancelBtnText="ביטול"
  customStyles={{
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 0,
    },
    dateInput: {
      marginLeft: 36,
    },
  }}
  onDateChange={(selectedDate) => {
    this.setState({selectedDate: date});
  }}
/> */}

        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  form: {
    width: '30%',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
  },
  button: {
    backgroundColor: '#FFC0CB',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HelpRequestForm;
