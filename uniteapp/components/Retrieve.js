// import axios from 'axios'
// import {getAll} from '../service';
// import endPoint from '../config'
// import { useEffect, useState } from 'react';
// // import SentMessage from './SentMessage'

// const Retrieve =  () => {
//     const [volunteers, setVolunteers] = useState();

//     useEffect(() => {
//       const fetchData = async () => {
//         const { data: volunteer } = await getAll(endPoint + 'volunteers');
//         setVolunteers(volunteer);  
//             console.log("volunteer", volunteer);
//       };
//     try{
//       fetchData();
//     }catch(error)
//     {
//       console.log(error)
//     }
//     }, []);
    


//   // async function fetchData() {
//   //   try {
//   //     volunteers?
//   //     volunteers.map((volunteer) => {
//   //       console.log("good",volunteer)
//   //     } )
//   //  : (console.log('aaa'))  
//   //   }
//   //       catch (error) {
//   //     // Handle any errors that occurred during the asynchronous operation
//   //     console.error('An error occurred:', error);
//   //   }
//   // }
  

// }

// export default Retrieve

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [volunteers, setVolunteers] = useState(null);

  useEffect(() => {
    // Make an HTTP request to the API endpoint
    axios.get('http://localhost:8000/volunteers')
    // axios.get('mongodb://localhost:27017')


      .then(response => {
        setVolunteers(response.data); // Update the state with the retrieved object
      })
      .catch(error => {
        console.error('Error retrieving object:', error);
      });
  }, []);

  // Render the object in your component
  return (
    <div>
      {volunteers && <p>volunteers: {volunteers.volunteerId}</p>}
      
    </div>
  );
}

export default MyComponent;

