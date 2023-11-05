import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
const { RegistrationForm } = require('../service');
import { basicUrl } from '../basicUrl';

// const LanguageSelection = ({ route }) => {
const LanguageSelection = () => {
    // const LanguageSelection = (props) => {
    const [volunteerId, setVolunteerId] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [firstAidKnowledge, setFirstAidKnowledge] = useState('');
    const [selectedCar, setSelectedCar] = useState('');
    const [organization, setOrganization] = useState('');
    const [selectedHospital, setSelectedHospital] = useState('');
    const [department, setDepartment] = useState('');
    const [anotherLanguage, setAnotherLanguage] = useState('');
    const [preferredHours, setPreferredHours] = useState('');
    const [preferredDays, setPreferredDays] = useState('');

    //אנגלית
    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        // try {
        //     const response = axios.post('http://localhost:8000/Preferences', { selectedLanguage });

        //     console.log('הנתונים נשלחו בהצלחה לשרת');
        //     console.log(response.data); // תוכל להשתמש בתשובה מהשרת אם יש צורך

        //     // כאן תוכל לבצע פעולות נוספות לאחר השליחה המוצלחת
        // } catch (error) {
        //     console.error('אירעה שגיאה בשליחת הנתונים לשרת:', error);

        //     // כאן תוכל לבצע טיפול בשגיאה אם יש צורך
        // }
    };

    const handleRegistration = () => {
        const ratingData = {

            volunteerId: volunteerId,
            organization: organization,
            selectedHospital: selectedHospital,
            department: department,
            anotherLanguage: anotherLanguage,
            preferredHours: preferredHours,
            preferredDays: preferredDays

        };


        console.log(ratingData);
        RegistrationForm(basicUrl + 'rating/', ratingData);
        // alert('נוספת בהצלחה! אשרייך!')
        navigation.navigate('PersonalArea');

        const PreferencesData = {

            selectedLanguage: selectedLanguage,
            firstAidKnowledge: firstAidKnowledge,
            selectedCar: selectedCar
        };
        console.log(PreferencesData);
        RegistrationForm(basicUrl + 'Preference/', PreferencesData);
        alert('נוספת בהצלחה! אשרייך!')

    }

    //ידע בעזרה ראשונה
    const handleFirstAidKnowledgeSelect = (knowledge) => {
        setFirstAidKnowledge(knowledge);
        // try {
        //     const response = axios.post('http://localhost:8000/Preferences', { firstAidKnowledge });

        //     console.log('הנתונים נשלחו בהצלחה לשרת');
        //     console.log(response.data); // תוכל להשתמש בתשובה מהשרת אם יש צורך

        //     // כאן תוכל לבצע פעולות נוספות לאחר השליחה המוצלחת
        // } catch (error) {
        //     console.error('אירעה שגיאה בשליחת הנתונים לשרת:', error);

        //     // כאן תוכל לבצע טיפול בשגיאה אם יש צורך
        // }
    };

    //שפות נוספות
    const handleAnotherLanguage = (anotherLanguage) => {
        setAnotherLanguage(anotherLanguage);
    };

    //מתנדב קבוע בארגון
    const handleOrganization = (organization) => {
        setOrganization(organization);
    };

    //בית חולים
    const handleSelectedHospital = (selectedHospital) => {
        setSelectedHospital(selectedHospital);
    };

    //מחלקה
    const handleDepartment = (department) => {
        setDepartment(department);
    };

    //רכב
    const handleSelectedCar = (selectedCar) => {
        setSelectedCar(selectedCar);
        // try {
        //     const response = axios.post('http://localhost:8000/Preferences', { selectedCar });

        //     console.log('הנתונים נשלחו בהצלחה לשרת');
        //     console.log(response.data); // תוכל להשתמש בתשובה מהשרת אם יש צורך

        //     // כאן תוכל לבצע פעולות נוספות לאחר השליחה המוצלחת
        // } catch (error) {
        //     console.error('אירעה שגיאה בשליחת הנתונים לשרת:', error);

        //     // כאן תוכל לבצע טיפול בשגיאה אם יש צורך
        // }
    };

    //כשרויות
    // const handleQualities = (qualities) => {
    //     setQualities(qualities);
    // };

    // //שעות מועדפות
    // const handlePreferredHours = (preferredHours) => {
    //     setPreferredHours(preferredHours);
    // };

    // //ימים מועדפים
    // const handlePreferredDays = (preferredDays) => {
    //     setPreferredDays(preferredDays);
    // };

    const handlePreferredHours = (preferredHour) => {
        if (preferredHours.includes(preferredHour)) {
          // אם השעה כבר נבחרה, הסר אותה מהרשימה
          setPreferredHours(preferredHours.filter(hour => hour !== preferredHour));
        } else {
          // אחרת, הוסף את השעה לרשימה
          setPreferredHours([...preferredHours, preferredHour]);
        }
      };
    
      const handlePreferredDays = (preferredDay) => {
        if (preferredDays.includes(preferredDay)) {
          // אם היום כבר נבחר, הסר אותו מהרשימה
          setPreferredDays(preferredDays.filter(day => day !== preferredDay));
        } else {
          // אחרת, הוסף את היום לרשימה
          setPreferredDays([...preferredDays, preferredDay]);
        }
      };


    return (
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                <Image source={require('/images/logo.png')} style={styles.logo} />
                <Text style={styles.title}>כדי לייעל את הפעילות שלנו, דרג את ההעדפות והמיומנויות שלך</Text>

                <Text style={styles.subtitle}>בחר אחת מהאפשרויות הבאות:</Text>
                <Text style={styles.title}>כיצד אתה דובר אנגלית</Text>


                <TouchableOpacity
                    style={[styles.option, selectedLanguage === 'שפת אם' && styles.selectedOption]}
                    // onPress={() => handleLanguageSelect('שפת אם')}
                    onPress={() => handleLanguageSelect(2)}
                >
                    <Text style={styles.optionText}>שפת אם</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.option, selectedLanguage === 'שפה נוספת' && styles.selectedOption]}
                    onPress={() => handleLanguageSelect(2)}
                >
                    <Text style={styles.optionText}>שפה נוספת</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.option, selectedLanguage === 'רמה טובה' && styles.selectedOption]}
                    onPress={() => handleLanguageSelect(3)}
                >
                    <Text style={styles.optionText}>רמה טובה</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.option, selectedLanguage === 'רמה בינונית' && styles.selectedOption]}
                    onPress={() => handleLanguageSelect(4)}
                >
                    <Text style={styles.optionText}>רמה בינונית</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.option, selectedLanguage === 'רמה בסיסית' && styles.selectedOption]}
                    onPress={() => handleLanguageSelect(5)}
                >
                    <Text style={styles.optionText}>רמה בסיסית</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.option, selectedLanguage === 'לא דובר' && styles.selectedOption]}
                    onPress={() => handleLanguageSelect(6)}
                >
                    <Text style={styles.optionText}>לא דובר</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.categoryTitle}>האם יש לך ידע בעזרה ראשונה</Text>
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                    style={[styles.option, firstAidKnowledge === 'מער' && styles.selectedOption]}
                    onPress={() => handleFirstAidKnowledgeSelect('מער')}
                >
                    <Text style={styles.optionText}>מער</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.option, firstAidKnowledge === 'חובש' && styles.selectedOption]}
                    onPress={() => handleFirstAidKnowledgeSelect('חובש')}
                >
                    <Text style={styles.optionText}>חובש</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.option, firstAidKnowledge === 'ידע בסיסי' && styles.selectedOption]}
                    onPress={() => handleFirstAidKnowledgeSelect('ידע בסיסי')}
                >
                    <Text style={styles.optionText}>ידע בסיסי</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.option, firstAidKnowledge === 'אין ידע' && styles.selectedOption]}
                    onPress={() => handleFirstAidKnowledgeSelect('אין ידע')}
                >
                    <Text style={styles.optionText}>אין ידע</Text>
                </TouchableOpacity>

                <Text style={styles.categoryTitle}>תיאור הרכב</Text>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        style={[styles.option, selectedCar === 'רכב נכים עם מעלון' && styles.selectedOption]}
                        onPress={() => handleSelectedCar('רכב נכים עם מעלון')}
                    >
                        <Text style={styles.optionText}>רכב נכים עם מעלון</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.option, selectedCar === 'רכב גדול 7-12 מקומות' && styles.selectedOption]}
                        onPress={() => handleSelectedCar('רכב גדול 7-12 מקומות')}
                    >
                        <Text style={styles.optionText}>רכב גדול 7-12 מקומות</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[styles.option, selectedCar === 'רכב גדול ונוח' && styles.selectedOption]}
                        onPress={() => handleSelectedCar('רכב גדול ונוח')}
                    >
                        <Text style={styles.optionText}>רכב גדול ונוח</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.option, selectedCar === 'רכב רגיל' && styles.selectedOption]}
                        onPress={() => handleSelectedCar('רכב רגיל')}
                    >
                        <Text style={styles.optionText}>רכב רגיל</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.option, selectedCar === 'אופנוע' && styles.selectedOption]}
                        onPress={() => handleSelectedCar('אופנוע')}
                    >
                        <Text style={styles.optionText}>אופנוע</Text>
                    </TouchableOpacity>

                    <Text style={styles.categoryTitle}>האם אתה משתייך לארגון מתנדבים באופן קבוע</Text>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity
                            style={[styles.option, organization === 'עזר מציון' && styles.selectedOption]}
                            onPress={() => handleOrganization('עזר מציון')}
                        >
                            <Text style={styles.optionText}>עזר מציון</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.option, organization === 'רפואה וחיים' && styles.selectedOption]}
                            onPress={() => handleOrganization('רפואה וחיים')}
                        >
                            <Text style={styles.optionText}>רפואה וחיים</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.option, organization === 'יד על הלב' && styles.selectedOption]}
                            onPress={() => handleOrganization('יד על הלב')}
                        >
                            <Text style={styles.optionText}>יד על הלב</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.option, organization === 'יד שרה' && styles.selectedOption]}
                            onPress={() => handleOrganization('יד שרה')}
                        >
                            <Text style={styles.optionText}>יד שרה</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.option, organization === 'אחר' && styles.selectedOption]}
                            onPress={() => handleOrganization('אחר')}
                        >
                            <Text style={styles.optionText}>אחר</Text>
                        </TouchableOpacity>


      <Text style={styles.categoryTitle}>באיזה שעות הינך מעונין להתנדב</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('1') && styles.selectedOption]}
          onPress={() => handlePreferredHours('1')}
        >
          <Text style={styles.optionText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, preferredHours.includes('2') && styles.selectedOption]}
          onPress={() => handlePreferredHours('2')}
        >
          <Text style={styles.optionText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('3') && styles.selectedOption]}
          onPress={() => handlePreferredHours('3')}
        >
          <Text style={styles.optionText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('4') && styles.selectedOption]}
          onPress={() => handlePreferredHours('4')}
        >
          <Text style={styles.optionText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('5') && styles.selectedOption]}
          onPress={() => handlePreferredHours('5')}
        >
          <Text style={styles.optionText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('6') && styles.selectedOption]}
          onPress={() => handlePreferredHours('6')}
        >
          <Text style={styles.optionText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('7') && styles.selectedOption]}
          onPress={() => handlePreferredHours('7')}
        >
          <Text style={styles.optionText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('8') && styles.selectedOption]}
          onPress={() => handlePreferredHours('8')}
        >
          <Text style={styles.optionText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('9') && styles.selectedOption]}
          onPress={() => handlePreferredHours('9')}
        >
          <Text style={styles.optionText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('10') && styles.selectedOption]}
          onPress={() => handlePreferredHours('10')}
        >
          <Text style={styles.optionText}>10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, preferredHours.includes('11') && styles.selectedOption]}
          onPress={() => handlePreferredHours('11')}
        >
          <Text style={styles.optionText}>11</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('12') && styles.selectedOption]}
          onPress={() => handlePreferredHours('12')}
        >
          <Text style={styles.optionText}>12</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('13') && styles.selectedOption]}
          onPress={() => handlePreferredHours('13')}
        >
          <Text style={styles.optionText}>13</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('14') && styles.selectedOption]}
          onPress={() => handlePreferredHours('14')}
        >
          <Text style={styles.optionText}>14</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('15') && styles.selectedOption]}
          onPress={() => handlePreferredHours('15')}
        >
          <Text style={styles.optionText}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('16') && styles.selectedOption]}
          onPress={() => handlePreferredHours('16')}
        >
          <Text style={styles.optionText}>16</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('17') && styles.selectedOption]}
          onPress={() => handlePreferredHours('17')}
        >
          <Text style={styles.optionText}>17</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('18') && styles.selectedOption]}
          onPress={() => handlePreferredHours('18')}
        >
          <Text style={styles.optionText}>18</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('19') && styles.selectedOption]}
          onPress={() => handlePreferredHours('19')}
        >
          <Text style={styles.optionText}>19</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('20') && styles.selectedOption]}
          onPress={() => handlePreferredHours('20')}
        >
          <Text style={styles.optionText}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('21') && styles.selectedOption]}
          onPress={() => handlePreferredHours('21')}
        >
          <Text style={styles.optionText}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('22') && styles.selectedOption]}
          onPress={() => handlePreferredHours('22')}
        >
          <Text style={styles.optionText}>22</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('23') && styles.selectedOption]}
          onPress={() => handlePreferredHours('23')}
        >
          <Text style={styles.optionText}>23</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferredHours.includes('24') && styles.selectedOption]}
          onPress={() => handlePreferredHours('24')}
        >
          <Text style={styles.optionText}>24</Text>
        </TouchableOpacity>

      <Text style={styles.categoryTitle}>באיזה ימים הינך מעונין להתנדב</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.option, preferredDays.includes('ראשון') && styles.selectedOption]}
          onPress={() => handlePreferredDays('ראשון')}
        >
          <Text style={styles.optionText}>ראשון</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, preferredDays.includes('שני') && styles.selectedOption]}
          onPress={() => handlePreferredDays('שני')}
        >
          <Text style={styles.optionText}>שני</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={[styles.option, preferredDays.includes('שלישי') && styles.selectedOption]}
           onPress={() => handlePreferredDays('שלישי')}
        >
           <Text style={styles.optionText}>שלישי</Text>
         </TouchableOpacity>

         <TouchableOpacity
          style={[styles.option, preferredDays.includes('רביעי') && styles.selectedOption]}
          onPress={() => handlePreferredDays('רביעי')}
          >
        <Text style={styles.optionText}>רביעי</Text>
         </TouchableOpacity>

        <TouchableOpacity
         style={[styles.option, preferredDays.includes('חמישי') && styles.selectedOption]}
          onPress={() => handlePreferredDays('חמישי')}
          >
          <Text style={styles.optionText}>חמישי</Text>
           </TouchableOpacity>

        <TouchableOpacity
                                     style={[styles.option, preferredDays.includes('שישי') && styles.selectedOption]}
                                     onPress={() => handlePreferredDays('שישי')}
                                >
                                    <Text style={styles.optionText}>שישי</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                     style={[styles.option, preferredDays.includes('לא משנה לי') && styles.selectedOption]}
                                     onPress={() => handlePreferredDays('לא משנה לי')}
                                >
                                    <Text style={styles.optionText}>לא משנה לי</Text>
                                </TouchableOpacity> 


 
    

                                <Text style={styles.categoryTitle}>באיזה בתי חולים הינך מעונין להתנדב</Text>
                                <View style={styles.optionsContainer}>
                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'שיבא' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('שיבא')}
                                    >
                                        <Text style={styles.optionText}>שיבא</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'איכילוב' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('איכילוב')}
                                    >
                                        <Text style={styles.optionText}>איכילוב</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'סורוקה' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('סורוקה')}
                                    >
                                        <Text style={styles.optionText}>סורוקה</Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'מעיני הישועה' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('מעיני הישועה')}
                                    >
                                        <Text style={styles.optionText}>מעיני הישועה</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'בלינסון' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('בלינסון')}
                                    >
                                        <Text style={styles.optionText}>בלינסון</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'אסותא אשדוד' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('אסותא אשדוד')}
                                    >
                                        <Text style={styles.optionText}>אסותא אשדוד</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'ברזילי' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('ברזילי')}
                                    >
                                        <Text style={styles.optionText}>ברזילי</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'רמבם' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('רמבם')}
                                    >
                                        <Text style={styles.optionText}>רמבם</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'בני ציון' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('בני ציון')}
                                    >
                                        <Text style={styles.optionText}>בני ציון</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'הלל יפה' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('הלל יפה')}
                                    >
                                        <Text style={styles.optionText}>הלל יפה</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'שערי צדק' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('שערי צדק')}
                                    >
                                        <Text style={styles.optionText}>שערי צדק</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'הדסה עין כרם' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('הדסה עין כרם')}
                                    >
                                        <Text style={styles.optionText}>הדסה עין כרם</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'הדסה הר הצופים' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('הדסה הר הצופים')}
                                    >
                                        <Text style={styles.optionText}>הדסה הר הצופים</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'זיו' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('זיו')}
                                    >
                                        <Text style={styles.optionText}>זיו</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'פוריה' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('פוריה')}
                                    >
                                        <Text style={styles.optionText}>פוריה</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'יוספטל' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('יוספטל')}
                                    >
                                        <Text style={styles.optionText}>יוספטל</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'אסף הרופא' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('אסף הרופא')}
                                    >
                                        <Text style={styles.optionText}>אסף הרופא</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'לניאדו' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('לניאדו')}
                                    >
                                        <Text style={styles.optionText}>לניאדו</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'קפלן' && styles.selectedOption]}
                                        onPress={() => handleSelectedHospital('קפלן')}
                                    >
                                        <Text style={styles.optionText}>קפלן</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[styles.option, selectedHospital === 'אחר' && styles.selectedOption]}
                                        onPress={() => handleOrganization('אחר')}
                                    >
                                        <Text style={styles.optionText}>אחר</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.categoryTitle}>באיזה מחלקות הינך מעונין להתנדב</Text>
                                    <View style={styles.optionsContainer}>
                                        <TouchableOpacity
                                            style={[styles.option, department === 'ילדים' && styles.selectedOption]}
                                            onPress={() => handleDepartment('ילדים')}
                                        >
                                            <Text style={styles.optionText}>ילדים</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[styles.option, department === 'פנימית' && styles.selectedOption]}
                                            onPress={() => handleDepartment('פנימית')}
                                        >
                                            <Text style={styles.optionText}>פנימית</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[styles.option, department === 'גריאטרית' && styles.selectedOption]}
                                            onPress={() => handleDepartment('גריאטרית')}
                                        >
                                            <Text style={styles.optionText}>גריאטרית</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[styles.option, department === 'אונקולוגית' && styles.selectedOption]}
                                            onPress={() => handleDepartment('אונקולוגית')}
                                        >
                                            <Text style={styles.optionText}>אונקולוגית</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[styles.option, department === 'אחר' && styles.selectedOption]}
                                            onPress={() => handleDepartment('אחר')}
                                        >
                                            <Text style={styles.optionText}>אחר</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.categoryTitle}>שפה נוספת שאתה דובר</Text>
                                        <View style={styles.optionsContainer}>
                                            <TouchableOpacity
                                                style={[styles.option, anotherLanguage === 'יידיש' && styles.selectedOption]}
                                                onPress={() => handleAnotherLanguage('יידיש')}
                                            >
                                                <Text style={styles.optionText}>יידיש</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={[styles.option, anotherLanguage === 'רוסית' && styles.selectedOption]}
                                                onPress={() => handleAnotherLanguage('רוסית')}
                                            >
                                                <Text style={styles.optionText}>רוסית</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={[styles.option, anotherLanguage === 'צרפתית' && styles.selectedOption]}
                                                onPress={() => handleAnotherLanguage('צרפתית')}
                                            >
                                                <Text style={styles.optionText}>צרפתית</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={[styles.option, anotherLanguage === 'ערבית' && styles.selectedOption]}
                                                onPress={() => handleAnotherLanguage('ערבית')}
                                            >
                                                <Text style={styles.optionText}>ערבית</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={[styles.option, anotherLanguage === 'אמהרית' && styles.selectedOption]}
                                                onPress={() => handleAnotherLanguage('אמהרית')}
                                            >
                                                <Text style={styles.optionText}>אמהרית</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={[styles.option, anotherLanguage === 'ספרדית' && styles.selectedOption]}
                                                onPress={() => handleAnotherLanguage('ספרדית')}
                                            >
                                                <Text style={styles.optionText}>ספרדית</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={[styles.option, anotherLanguage === 'אחר' && styles.selectedOption]}
                                                onPress={() => handleAnotherLanguage('אחר')}
                                            >
                                                <Text style={styles.optionText}>אחר</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                                                <Text style={styles.buttonText}>אישור</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
    },
    optionsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color: '#666',
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
    },
    option: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedOption: {
        backgroundColor: '#FFC0CB',
        borderColor: '#FFC0CB',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default LanguageSelection;
