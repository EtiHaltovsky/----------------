
// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// // import 'message' from 'A'
// const ConfirmationComponent = ({ onConfirmation }) => {
//     const handleConfirmation = () => {
//         const volunteerId = "123"; // Replace with the actual volunteer ID
//       onConfirmation(volunteerId);
//     };
  
//     return (
//       <View>
//         <Text>אשר</Text>
//         <Text>אנא אשר את בחירתך</Text>
//         <Button title="אישור" onPress={handleConfirmation} />
//       </View>
//     );
//   };
  
//   export default ConfirmationComponent;
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ConfirmationComponent = ({ onConfirmation }) => {
  const handleConfirmation = () => {
    const volunteerId = "123"; // Replace with the actual volunteer ID
    onConfirmation(volunteerId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>אנא אשר את בחירתך</Text>
      <Button title="אישור" onPress={handleConfirmation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ConfirmationComponent;
