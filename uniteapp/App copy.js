// import { addItem, getById, getAll, updateItem, addVolunteer } from './service'
// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// // import LoginScreen from '../uniteapp/login-screen/src/login/login';
// import { StyleSheet, Text, View } from 'react-native';
// import Connect from './components/Connect';
// import HelpMassage from './components/HelpMassage';
// import FormComponent from './components/FormComponent';
// import VolunteeringInTherapy from './components/VolunteeringInTherapy';
// import AddVolunteer from './components/AddVolunteer';
// import SignupScreen from './src/screens/SignupScreen';
// import VolunteerComponent from './components/VolunteerComponent'
// import AddRecipient from './components/AddRecipient';
// import Retrieve from './components/Retrieve'
// import Table from './components/Table'
// import LoginScreen from './components/LoginScreen'
// import RegistrationForm from './components/RegistrationForm'
// import MyComponent from './components/MyComponent'
// import RequestRecipient from './components/RequestRecipient'
// import HelpRequestForm from './components/HelpRequestForm'
// import EmailClient from './components/EmailClient'
// import LanguageSelection from './components/LanguageSelection '
// // import PersonalArea  from './components/PersonalArea '

// import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import { AppRegistry } from 'react-native';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import AppReducer from './src/reducers';
// import AppNavigator from './src/navigations/AppNavigation';
// import AllMessage from './components/AllMessage';


// const Stack = createStackNavigator();

// export default function App() {
//   return (

//     <View style={styles.container}>
    
//         <NavigationContainer>
//           <Stack.Navigator>
//             {/* <Stack.Screen name="RegistrationForm " component={RegistrationForm } />
//             <Stack.Screen name="LoginScreen" component={LoginScreen} />
//             <Stack.Screen name="HelpRequestForm" component={HelpRequestForm} /> */}
//             <Stack.Screen name="EmailClient" component={EmailClient} />

//           </Stack.Navigator>
//         </NavigationContainer>
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



























// // const Stack = createNativeStackNavigator();
// // console.disableYellowBox = true;

// // function StarterApp() {
// //   const [details, setDetails] = useState([]);//שיכניס את הנתונים למערך - בעצם שיכניס למשתנה את כל האוביקט
// //   const [request, setRequest] = useState();//משתנה כדי לוודא האם היתה גישה לסרוויס
// //   const [currentUserID, setCurrentUserID] = useState('');


// //   useEffect(() => {
// //     // Simulating the retrieval of the current user's ID
// //     setCurrentUserID('222222222');
// //   }, []);


// //   return (
// //     <div className="App">

// //       <View>

           
// //       <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen
// //           name="/LanguageSelection"
// //           component={LanguageSelection}
// //           options={{title: 'Welcome'}}
// //         />
// //         {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
// //       </Stack.Navigator>
// //     </NavigationContainer>
     
// //         {/* <AddVolunteer /> */}
// //         {/* <AddRecipient /> */}
// //         {/* {currentUserID === '222222222' ? (
// //         <HelpMassage />
// //       ) : (
// //         <Text>You do not have permission to access this component</Text>
// //       )} */}
// //         {/* <HelpMassage/> */}
// //         {/* <HelpRequestForm/> */}
// //         {/* <VolunteeringInTherapy /> */}
// //         {/* < BenodProvider > */}
// //         {/* <Retrieve/> */}
// //         {/* <Table/> */}
// //         {/* <MyComponent/> */}
// //         {/* <PersonalArea/> */}
// //         {/* <RequestRecipient/> */}
// //         {/* <RegistrationForm user = {volunteerId}/> */}
// //         {/* <LoginScreen/> */}
// //         {/* <AllMessage /> */}
// //         <LanguageSelection />
// //         {/* <VolunteerComponent /> */}
// //         {/* </BenodProvider> */}
// //         {/* נותנת למשתמש לבחור מה הדירוג שלו לכל דבר */}
// //         {/* <FormComponent/> */}
// //         {/* <try/> */}
// //         {/* <StatusBar style="auto" /> */}
// //         {/* <Provider store={store}> */}
// //           {/* <AppNavigator /> */}
// //           {/* <SignupScreen/> */}

// //         {/* </Provider> */}
// //       </View>
// //     </div>

// //   );
// // }

// // // AppRegistry.registerComponent('rn_starter_kit', () => StarterApp);

// // export default StarterApp;

import {AppRegistry} from 'react-native';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import { addItem, getById, getAll, updateItem, addVolunteer } from './service'
import React, { useState } from "react";
import axios from 'axios'
import LoginScreen from '../uniteapp/login-screen/src/login/login';
// import RegistrationForm from '../uniteapp/RegistrationForm';
import { StyleSheet, Text, View } from 'react-native';
import Connect from './components/Connect';
import AddVolunteer from './components/AddVolunteer';
import EmailSender from './components/EmailSender';
import RegistrationForm from './components/RegistrationForm';
import LoginScreen from './components/LoginScreen'

// import LanguageSelection from 'components/LanguageSelection';



import AppReducer from './src/reducers';
import AppNavigator from './src/navigations/AppNavigation';

const store = createStore(AppReducer, applyMiddleware(thunk));

console.disableYellowBox = true;

function StarterApp() {
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      {/* <EmailSender /> */}
      {/* <LanguageSelection /> */}
      <LoginScreen/>
    <RegistrationForm/>
      {/* <LoginScreen /> */}
    </Provider>
  );
}

AppRegistry.registerComponent('rn_starter_kit', () => StarterApp);

export default StarterApp;
