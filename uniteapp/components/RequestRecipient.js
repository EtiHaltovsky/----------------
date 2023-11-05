import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Picker } from 'react-native';

const RequestRecipient = () => {
  const[fieldOfVolunteering,setFieldOfVolunteering]=useState('')
  const [day, setDay] = useState('רביעי'); // יום בחירה מתוך האפשרויות
  const [from, setFrom] = useState('רמת אהרן בבני ברק'); // נקודת מוצא בחירה מתוך האפשרויות
  const [to, setTo] = useState('מעיני הישועה בבני ברק'); // נקודת יעד בחירה מתוך האפשרויות
  const [time, setTime] = useState('בוקר'); // זמן בחירה מתוך האפשרויות


  const handleFieldOfVolunteeringChange = (selectedDay) => {
    setFieldOfVolunteering(selectedDay);
  };

  const handleDayChange = (selectedFieldOfVolunteering) => {
    setDay(selectedFieldOfVolunteering);
  };

  const handleFromChange = (selectedFrom) => {
    setFrom(selectedFrom);
  };

  const handleToChange = (selectedTo) => {
    setTo(selectedTo);
  };

  const handleTimeChange = (selectedTime) => {
    setTime(selectedTime);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        אנו צריכים {fieldOfVolunteering} מ{from} ל{to}, ב{day} ב{time}
      </Text>
      <View style={styles.pickerContainer}>
        <Text>תחום עזרה:</Text>
        <Picker
          selectedValue={fieldOfVolunteering}
          onValueChange={handleFieldOfVolunteeringChange}
        >
            {/* <Picker.Item label="תחום התנדבות" value="" /> */}
        <Picker.Item label="הסעות חולים" value="הסעות חולים" />
        <Picker.Item label="גיהוץ למשפחות" value="גיהוץ למשפחות" />
        <Picker.Item label="העברת חבילות" value="העברת חבילות" />
        <Picker.Item label="חלוקת אוכל" value="חלוקת אוכל" />
        <Picker.Item label="שמירה על ילדים בבתי חולים" value="שמירה על ילדים בבתי חולים" />
        <Picker.Item label="עריכת קניות למשפחותיהם" value="	עריכת קניות למשפחותיהם" />
        <Picker.Item label="השאלת ציוד רפואי" value="השאלת ציוד רפואי" />
        <Picker.Item label="סיוע לחולים בבתיהם " value="סיוע לחולים בבתיהם " />
        <Picker.Item label="סיעוד ותמיכה בקשישים" value="סיעוד ותמיכה בקשישים" />
          {/* <Picker.Item label="יום שבת" value="Saturday" /> */}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text>יום:</Text>
        <Picker
          selectedValue={day}
          onValueChange={handleDayChange}
        >
          <Picker.Item label="יום ראשון" value="ראשון" />
          <Picker.Item label="יום שני" value="שני" />
          <Picker.Item label="יום שלישי" value="שלישי" />
          <Picker.Item label="יום רביעי" value="רביעי" />
          <Picker.Item label="יום חמישי" value="חמישי" />
          <Picker.Item label="יום שישי" value="שישי" />
          {/* <Picker.Item label="יום שבת" value="Saturday" /> */}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text>מ:</Text>
        <Picker
          selectedValue={from}
          onValueChange={handleFromChange}
        >
          <Picker.Item label="רמת אהרן בבני ברק" value="רמת אהרן בבני ברק" />
          <Picker.Item label="נקודת מוצא אחרת 1" value="נקודת מוצא אחרת 1" />
          <Picker.Item label="נקודת מוצא אחרת 2" value="נקודת מוצא אחרת 2" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text>ל:</Text>
        <Picker
          selectedValue={to}
          onValueChange={handleToChange}
        >
          <Picker.Item label="מעיני הישועה בבני ברק" value="מעיני הישועה בבני ברק" />
          <Picker.Item label="נקודת יעד אחרת 1" value="נקודת יעד אחרת 1" />
          <Picker.Item label="נקודת יעד אחרת 2" value="נקודת יעד אחרת 2" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text>זמן:</Text>
        <Picker
          selectedValue={time}
          onValueChange={handleTimeChange}
        >
          <Picker.Item label="בוקר" value="בוקר" />
          <Picker.Item label="צהריים" value="צהריים" />
          <Picker.Item label="אחרי צהריים" value="אחרי צהריים" />
          <Picker.Item label="ערב" value="ערב" />
          <Picker.Item label="לילה" value="לילה" />

        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default RequestRecipient;
