import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
const { getAllnewRequests } = require('../service');

const PersonalArea = ({ volunteerId }) => {
  const [previousVolunteerings, setPreviousVolunteerings] = useState([]);
  const [upcomingVolunteerings, setUpcomingVolunteerings] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch previous volunteerings from VolunteerPosted table based on volunteerId
    const fetchPreviousVolunteerings = async () => {
      try {
        // Replace 'fetchVolunteeringsByVolunteerId' with your own function to fetch data from the database
        // const response = await fetchVolunteeringsByVolunteerId(volunteerId);
        const response = await getAllnewRequests(volunteerId);
        setPreviousVolunteerings(response.data);
      } catch (error) {
        console.log('Error fetching previous volunteerings:', error);
      }
    };

    // Fetch upcoming volunteerings from newRequests table based on volunteerId
    const fetchUpcomingVolunteerings = async () => {
      try {
        // Replace 'fetchUpcomingVolunteeringsByVolunteerId' with your own function to fetch data from the database
        const response = await getAllnewRequests(volunteerId);
        setUpcomingVolunteerings(response.data);
      } catch (error) {
        console.log('Error fetching upcoming volunteerings:', error);
      }
    };

    // // Fetch messages from VolunteersMessages table based on volunteerId
    // const fetchMessages = async () => {
    //   try {
    //     // Replace 'fetchMessagesByVolunteerId' with your own function to fetch data from the database
    //     const response = await fetchMessagesByVolunteerId(volunteerId);
    //     setMessages(response.data);
    //   } catch (error) {
    //     console.log('Error fetching messages:', error);
    //   }
    // };

    fetchPreviousVolunteerings();
    fetchUpcomingVolunteerings();
    // fetchMessages();
  }, [volunteerId]);

  return (
    <View>
      <Image source={require('/images/logo.png')} style={styles.image} />
      <Text>התנדבויות קודמות</Text>
      {previousVolunteerings.map((volunteering) => (
        <Text key={volunteering.id}>{volunteering.title}</Text>
        // Render the necessary details of the previous volunteerings
      ))}
      
      <Text>התנדבויות הבאות</Text>
      {upcomingVolunteerings.map((volunteering) => (
        <Text key={volunteering.id}>{volunteering.title}</Text>
        // Render the necessary details of the upcoming volunteerings
      ))}
      
      <Text>הודעות ממקבלי הסיוע</Text>
      {messages.map((message) => (
        <Text key={message.id}>{message.content}</Text>
        // Render the necessary details of the messages
      ))}
    </View>
  );
};

const styles = {
  image: {
    width: 200,
    height: 200,
  },
};

export default PersonalArea;
