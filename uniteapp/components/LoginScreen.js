// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


// const WelcomeScreen = ({ navigation }) => {
//   const handleLoginPress = () => {
//     navigation.navigate('./componnents/Connect'); // ניווט לקומפוננטה Connect
//   };

//   const handleCreateAccountPress = () => {
//     navigation.navigate('AddVolunteer'); // ניווט לקומפוננטה AddVolunteer
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Image source={require('./assets/logo.png')} style={styles.logo} /> */}
//       <Image source={require('/images/logo.png')} style={styles.logo} />
//       <Text style={styles.welcomeText}>ברוכים הבאים למתחברים למתנדבים</Text>
//       <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
//         <Text style={styles.buttonText}>התחבר</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={handleCreateAccountPress}>
//         <Text style={styles.buttonText}>יצירת חשבון</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   logo: {
//     width:200,
//     height: 150,
//     marginBottom: 20,
//   },
//   welcomeText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#000000',
//   },
//   button: {
//     backgroundColor: '#FFC0CB',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
// };

// export default WelcomeScreen;



import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { checkUserInDatabase } from './components/checkUserInDatabase';
// import { checkUserInDatabase } from './checkUserInDatabase';
import { checkTravel } from '../service';
import { basicUrl } from '../basicUrl'

const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const obj={
  password:password,
  email:email
}
  const handleLoginPress = () => {

    console.log(basicUrl + 'volunteers/',obj)

    checkTravel(basicUrl + 'volunteers/',obj)
      .then(result => {
        console.log(result);
        if(result==true)
        navigation.navigate('VolunteerPersonalArea');
      })
    // checkUserInDatabase();
    // בדיקה על שם המשתמש והמייל כנגד הנתונים במסד הנתונים
    // כאן יש לממש את החיבור למסד הנתונים ואת הבדיקה בהתאם
    // לדוגמה, נניח שיש לנו משתנה users המכיל את המשתמשים הקיימים במסד הנתונים
    // אם השם משתמש והמייל נכונים, מעבר למסך AllMessages
    // אחרת, הצגת התראה עם הודעת שגיאה
    // if (volunteers.some(volunteers => volunteer.password === password && volunteer.email === email)) {
      // מעבר למסך AllMessages
      // navigation.navigate('RegistrationForm');


    // } else {
    //   Alert.alert('שגיאה', 'הסיסמא או המייל אינם נכונים');
    // }
    // פונקציה שמתבצעת בעת לחיצה על כפתור ההתחברות
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('RegistrationForm');

    // פונקציה שמתבצעת בעת לחיצה על כפתור יצירת חשבון
  };

  const goToLanguageSelection = () => {
    navigation.navigate('LanguageSelection', { name: 'English' });
  };

  return (
    <View style={styles.container}>
    <Text style={styles.buttonText}>התחברות</Text>
    <TextInput
        style={styles.input}
        placeholder="אימייל"
        value={email}
        onChangeText={setEmail}
    />
    <TextInput
        style={styles.input}
        placeholder="סיסמא"
        value={password}
        onChangeText={setPassword}
    />
    <Button title="התחבר" onPress={handleLoginPress} />
</View>

    // <View style={styles.container}>
    //   {/* <button onPress={goToLanguageSelection} title='go to LanguageSelection'/> */}

    //   <TouchableOpacity style={styles.button} onPress={goToLanguageSelection}>
    //     <Text style={styles.buttonText}>go to LanguageSelection</Text>
    //   </TouchableOpacity>

    //   <Image source={require('/images/logo.png')} style={styles.logo} />
    //   {/* <TextInput style={styles.input} placeholder="שם משתמש" /> */}
    //   <TextInput style={styles.input} placeholder="מייל" />
    //   <TextInput style={styles.input} placeholder="סיסמא" />

    //   <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
    //     <Text style={styles.buttonText}>התחבר</Text>
    //   </TouchableOpacity>
    //   <Text style={styles.noAccountText}>עדיין אין לך חשבון?</Text>
    //   <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccountPress}>
    //     <Text style={styles.createAccountButtonText}>יצירת חשבון</Text>
    //   </TouchableOpacity>

    //   {/* //בדיקת סיסמא ומייל */}
    //   {/* checkCredentials(email, password); */}
    // </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '20%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFC0CB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  noAccountText: {
    fontSize: 16,
    marginBottom: 10,
  },
  createAccountButton: {
    backgroundColor: '#FFC0CB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  createAccountButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
};

export default LoginScreen;
