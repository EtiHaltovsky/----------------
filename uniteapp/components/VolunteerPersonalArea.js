import React, { useState, useEffect } from 'react';
  import { View, Image, Text, TouchableOpacity, StyleSheet , Button} from 'react-native';
  import axios from 'axios'; // Assuming you have axios installed
 
  const VolunteerPersonalArea = ({ volunteerId }) => {
    const [previousVolunteers, setPreviousVolunteers] = useState([]);
    const [nextVolunteers, setNextVolunteers] = useState([]);
    const [aidRecipientChat, setAidRecipientChat] = useState(null);

    useEffect(() => {
        // Fetch previous volunteers from "volunteerPosted" table
        axios.get(`/api/volunteers/previous?volunteerId=${volunteerId}`)
          .then(response => {
            setPreviousVolunteers(response.data);
          })
          .catch(error => {
            console.error('Error fetching previous volunteers:', error);
          });
    
    // Fetch next volunteers from "newrequests" table
    axios.get(`/api/volunteers/next?volunteerId=${volunteerId}`)
      .then(response => {
        setNextVolunteers(response.data);
      })
      .catch(error => {
        console.error('Error fetching next volunteers:', error);
      });
  }, [volunteerId]);

//   const MyComponent = () => {
//     const fetchDataFromMongo = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/'); // Replace with your actual API endpoint
//         const data = response.data; // Retrieved data from the server
  
//         // Process the data or update the state in your component as needed
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching data from MongoDB:', error);
//       }
//     };
  const handlePreviousVolunteerings = () => {
    // Implement your logic for handling previous volunteerings
    console.log('Previous Volunteerings clicked');
  };
  

  const handleNextVolunteerings = () => {
    // Implement your logic for handling next volunteerings
    console.log('Next Volunteerings clicked');
  };

  const handleChatWithAidRecipient = () => {
    // Implement your logic to initiate a chat with the aid recipient
    // using aidRecipientChat data or other relevant information
    // For example, open a chat window or navigate to a chat screen
    // based on the selected aid recipient.
    console.log('Chat with aid recipient clicked:', aidRecipientChat);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>אזור אישי מתנדב</Text>
      </View>

      <View style={styles.content}>
      </View>

      <View style={styles.sideMenu}>
      {/* <Button title="Fetch Data" onPress={fetchDataFromMongo} /> */}



        <TouchableOpacity style={styles.menuItem} onPress={handlePreviousVolunteerings}>
          <Text style={styles.menuItemText}>התנדבויות קודמות</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleNextVolunteerings}>
          <Text style={styles.menuItemText}>התנדבויות הבאות</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleChatWithAidRecipient}>
          <Text style={styles.menuItemText}>צ'אט עם מקבל הסיוע</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 150,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  menuItem: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  menuItemText: {
    fontSize: 16,
  },
});

export default VolunteerPersonalArea;
