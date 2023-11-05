// import { React, useState } from 'react';
// // import BackButton from "./Details";
// // import { View, Text, Button } from 'react-native';
// import { StyleSheet, View, TextInput, Button, Text, Image } from 'react-native';
// import { basicUrl } from '../config';
// const { checkTravel } = require('./service');
// import { useNavigation } from '@react-navigation/native';

// const Travel = () => {
//     const [id, setId] = useState('');

//     const navigation = useNavigation();

   
//         checkTravel(basicUrl + 'travels/', id)
//             .then(result => {
//                 console.log(result);
//                 if (result == true) {
//                     navigation.navigate('MessegeUsers');
//                 }
//             });

//         };

//     return (
//         <View style={styles.container}>
//             <Image source={require('../assets/Mail  Next-WF.png')}
//                 style={styles.image}></Image>
//             <Text style={styles.Text}>צפה בהודעות</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="תעודת זהות"
//                 value={id}
//                 onChangeText={setId}
//             />
//             <Button title="ENTER" onPress={handleSignup} />
//         </View>

//       );
    

// };

