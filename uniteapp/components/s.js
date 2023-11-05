import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
//import MainScreen from './MainScreen';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/iconn.jpeg')} style={styles.logo} />
      <Text style={styles.title}>באיזה כלי תבחר לנסוע? </Text>
      <Button title="אופניים חשמליים" onPress={() => navigation.navigate('BikeRentalPage')} />
      <br/>
      <Button title="קורקינט חשמלי" onPress={() => navigation.navigate('KorkinetRentalPage')} />
      <br/>
      <Button title=" לסיום השימוש" onPress={() => navigation.navigate('BikeRentalPage')} />
      <br/>
      <Button title="לכניסה" onPress={() => navigation.navigate('MainScreen')}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Screen1;
