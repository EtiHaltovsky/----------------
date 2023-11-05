import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import HelpMassage from './HelpMassage';

// const MyComponent = () => {
//   return <Text>This component is visible only to specific users</Text>;
// };

const SentMessage = (prop) => {
  const [currentUserID, setCurrentUserID] = useState('');

  useEffect(() => {
    // Simulating the retrieval of the current user's ID
    setCurrentUserID('222222222');
  }, []);

  return (
    <View>
        {console.log("prpo", prop.message)}
      {currentUserID === '222222222' ? (
        <HelpMassage prop = {prop.message} />
      ) : (
        <Text>You do not have permission to access this component</Text>
       
      )}
    </View>
  );
};

export default SentMessage;
