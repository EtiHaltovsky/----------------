// import React from 'react';
// import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
// import { TouchableOpacity } from 'react-native';

// // import Img from './assets/propfil.png';
// const LoginScreen = () => {


//   const handlePress = () => {

//  const da= getData(basicUrl + 'volunteers/');
//     if (da.volunteerId) {
    
//    console.log('good!')
//     } else {
//       console.log('couldnt get data');
//     }
//   };


//   return (
//     <View style={styles.container}>
//       {/* <Image source={Img} style={styles.image} /> */}
//       <View style={styles.inputContainer}>
//         <View style={styles.inputWrapper}>
//           <Text style={styles.label}>שם משתמש:</Text>
//           <TextInput style={styles.input} placeholder="שם משתמש" />
//         </View>
//         <View style={styles.inputWrapper}>
//           <Text style={styles.label}>סיסמא:</Text>
//           <TextInput style={styles.input} placeholder="סיסמא" secureTextEntry={true} />
//         </View>
//       <View style={styles.buttonContainer}>
//       <br></br>
//       <Button title="אישור" onPress={handlePress}/>

//         {/* <TouchableOpacity>
//          <Text>אישור</Text>
//          </TouchableOpacity> */}
//         </View>    
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//   },
//   inputContainer: {
//     borderWidth: 2,
//     borderColor: '#007AFF',
//     borderRadius: 5,
//     padding: 10,
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   label: {
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//     padding: 5,
//   },
// });

// export default LoginScreen;



import React, { useState } from 'react';

const Login = () => {
  const [volunteerrName, setVolunteerrName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // כאן יש לבצע בדיקת התאמה עם מסד הנתונים
    // נניח שיש לנו מערך של משתמשים וסיסמאות
    const users = [
      { volunteerrName: 'avi', phone: '1234567895' },
      { volunteerrName: 'eli', phone: '0123654789' },
      // וכן הלאה...
    ];

    const user = users.find((user) => user.volunteerrName === volunteerrName && user.phone === phone);

    if (user) {
      setIsLoggedIn(true);
      console.log('good!!')
      // המשך לפעולות אחרות שלא תלויות בדוגמה זו...
    } else {
      console.log('שם המשתמש או הסיסמה אינם תואמים');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={volunteerrName}
        onChange={(e) => setVolunteerrName(e.target.value)}
       placeholder="שם מלא"
      />
      <input
        type="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="פלאפון"
      />
      <button onClick={handleLogin}>התחבר</button>
    </div>
  );
};

export default Login;
