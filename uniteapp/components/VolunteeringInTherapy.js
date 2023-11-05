import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VolunteeringInTherapy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ההתנדבות בטיפול</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default VolunteeringInTherapy;
