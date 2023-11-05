// import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getById } from '../service';
import VolunteerComponent from './VolunteerComponent'


// const HelpMassage = ({ prop }) => {
//   console.log(prop);
//   const [message, setmessage] = useState(prop);

//   // Rest of the code...
// // }





const HelpMassage = (prop) => {
  console.log(prop.prop)
  const [message, setmessage] = useState(prop.prop);
  // const splitdate = message.date.toString().split('T')[0]

  const [checked, setChecked] = useState(false)
  const [rejection, setRejection] = useState(false)
  const [fieldOfVolunteering, setFieldOfVolunteering] = useState();
  const [from, setfrom] = useState();
  const [where, setWhere] = useState();
  const [time, setTime] = useState();
  const [day, setDay] = useState();
  const [date, setDate] = useState();
  const handleAccept = () => {
    setChecked(true)
    const response = volunteers.findOne({ volunteerId });
    return response;

    const navigation = useNavigation();
    navigation.navigate('SuccessScreen', { message: 'ההתנדבות הושלמה בהצלחה, הפרטים ישלחו בהודעה נפרדת' });
  }

  const handleReject = () => {

    setRejection(true);

  }

  const fetchData = async () => {
    try {
      // Perform an HTTP request to fetch data from the server
      const response = await fetch('http://localhost:8000/');

      // Parse the response as JSON
      const jsonData = await response.json();

      // Set the retrieved data in the state
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  // {!rejection && !checked ? <span>!rejection && !checked</span> : <span>ddd</span>}
  return (
    <>
      {!rejection && !checked ?
        <View style={styles.container}>
          <Image source={require('/images/logo.png')} style={styles.logo} />
          {/* <Text style={styles.message}>{`צריכים ${message.fieldOfVolunteering} מ${message.from} ל${message.where} בשעה ${message.time} יום ${message.day} ${splitdate} `}</Text> */}

          <Text style={styles.message}>צריכים העברת חבילה מאשדוד הלל 8 <br></br>לבית החולים אסותא אשדוד בשעה 16:15 יום שלישי 16/02/2023</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
              <Text style={styles.buttonText}>דחייה</Text>
              {/* if(rejection==true?<massage />:""); */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
              <Text style={styles.buttonText}>אישור</Text>
            </TouchableOpacity>

          </View>
        </View>
        : rejection ? alert('ok!👍') : <VolunteerComponent />}

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center'
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B0082'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  acceptButton: {
    backgroundColor: '#00CED1',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 150,
    // marginBottom: 20,
  },
  rejectButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default HelpMassage;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// const HelpMassage = ({ rideDetails }) => {
//   const navigation = useNavigation();
//   const [isAccepted, setIsAccepted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleAccept = async () => {
//     setIsLoading(true);
//     try {
//         const response = await axios.get('http://localhost:8000/volunteers');
// const volunteers = response.data;

//     //   const response = await axios.patch(`http://localhost:3000/rides/${rideDetails.id}`, { status: 'accepted' });
//       if (response.status === 200) {
//         setIsAccepted(true);
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Failed to accept ride. Please try again later.');
//     }
//     setIsLoading(false);
//   };

//   const handleReject = async () => {
//     setIsLoading(true);
//     try {
//         const response = await axios.get('http://localhost:8000/volunteers');
// const volunteers = response.data;

//     //   const response = await axios.patch(`http://localhost:8000/volunteers/${rideDetails.id}`, { status: 'rejected' });
//       if (response.status === 200) {
//         navigation.navigate('RejectedRide', { rideDetails });
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Failed to reject ride. Please try again later.');
//     }
//     setIsLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.message}>{rideDetails.details}</Text>
//       {isAccepted ? (
//         <Text style={styles.acceptedText}>התנדבות זו אושרה בהצלחה</Text>
//       ) : (
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.acceptButton} onPress={handleAccept} disabled={isLoading}>
//             {isLoading ? (
//               <Text style={styles.buttonText}>טוען...</Text>
//             ) : (
//               <Text style={styles.buttonText}>אישור</Text>
//             )}
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.rejectButton} onPress={handleReject} disabled={isLoading}>
//             {isLoading ? (
//               <Text style={styles.buttonText}>טוען...</Text>
//             ) : (
//               <Text style={styles.buttonText}>דחייה</Text>
//             )}
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F0F8FF',
//     borderRadius: 10,
//     padding: 10,
//     margin: 10,
//     alignItems: 'center'
//   },
//   message: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#4B0082'
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10
//   },
//   acceptButton: {
//     backgroundColor: '#00CED1',
//     padding: 10,
//     borderRadius: 10,
//     width: 120,
//     alignItems: 'center'
//   },
//   rejectButton: {
//     backgroundColor: '#FF6347',
//     padding: 10,
//     borderRadius: 10,
//     width: 120,
//     alignItems: 'center'
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 16
//   }
// });

// export default HelpMassage;



