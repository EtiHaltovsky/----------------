// const VolunteerComponent = () => {
//     const [confirmedVolunteerId, setConfirmedVolunteerId] = useState(null);
//     const { broadcast, subscribe } = useBenod();
  
//     const handleConfirmation = (volunteerId) => {
//       setConfirmedVolunteerId(volunteerId);
//       broadcast('confirmation', volunteerId);
//     };
  
//     subscribe('confirmation', (data) => {
//       setConfirmedVolunteerId(data);
//     });
  
//     return (
//       <View>
//         {confirmedVolunteerId ? (
//           <Text>Volunteer {confirmedVolunteerId} has confirmed the participation.</Text>
//         ) : (
//           <ConfirmationComponent volunteerId="123" onConfirmation={handleConfirmation} />
//         )}
//       </View>
//     );
//   };
  


import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
// import {ConfirmationComponent} from 'react'
import ConfirmationComponent from './ConfirmationComponent';


const VolunteerComponent = () => {
  const [confirmedVolunteerId, setConfirmedVolunteerId] = useState(null);

  const handleConfirmation = (volunteerId) => {
    setConfirmedVolunteerId(volunteerId);
  };

  return (
    <View>
      {confirmedVolunteerId ? (
        <Text>Volunteer {confirmedVolunteerId} has confirmed the participation.</Text>
      ) : (
        <ConfirmationComponent onConfirmation={handleConfirmation} />
      )}
    </View>
  );
};

export default VolunteerComponent;
