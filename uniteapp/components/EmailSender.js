// import React from 'react';
// import { View, Image, Button, Linking,StyleSheet } from 'react-native';

// const EmailClient = () => {
//   const sendEmail = () => {
//     Linking.openURL('mailto:dvorahal@gmail.com?subject=Hello%20from%20React%20Native&body=This%20is%20the%20body%20of%20the%20email');
//   };

//   return (
//     <View style={{ flex: 1 }}>
//      <View style={styles.imageContainer}>
//       <Image
//           source={require('/images/logo.png')}
//           style={styles.image}
//         />
//       </View>

//       <View style={{ margin: 20 }}>
//         <Button title="Send Email" onPress={sendEmail} />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//       },
//       imageContainer: {
//         alignItems: 'center',
//         marginTop: 20,
//       },
//     image: {
//         width: 200,
//         height: 200,
//         resizeMode: 'contain',
//       },
// });
// export default EmailClient;


import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';


const EmailSender = () => {
  const sendEmail = () => {
    const recipients = ['dvorahal@gmail.com', 'et3252760@gmail.com'];
    const subject = 'Hello from React Native!';
    const body = '<h1>Hello!</h1><p>This is the content of the email.</p>';
  
    axios.post('http://localhost:8000/send-email', {
      recipients,
      subject,
      body,
    })
    .then(response => {
      console.log('Email sent successfully:', response.data);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  };
  
  // const sendEmail = () => {
    
  //   // ... code for sending the email using axios ...
  // };

  return (
    <View>
      <Button title="Send Email" onPress={sendEmail} />
    </View>
  );
};

export default EmailSender;

// Example function to send email from the React Native app

// Call the sendEmail function when a button is pressed, for example




  