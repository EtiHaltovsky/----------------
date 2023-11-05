import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Log from './Log'
// import React from 'react';
import Connect from './Connect';
import RegistrationForm from './RegistrationForm';
import { Image } from '@react-navigation/native';
import Chart from './Chart';




import React, { useState, useEffect } from "react";
// import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App


// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text>  */}
//       <RegistrationForm />
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
