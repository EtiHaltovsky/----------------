import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from './components/LoginScreen';
import LanguageSelection from './components/LanguageSelection';
import RegistrationForm from './components/RegistrationForm';
import VolunteerPersonalArea from './components/VolunteerPersonalArea'
// import PersonalArea from './components/PersonalArea'
import HelpRequestForm from './components/HelpRequestForm'
import Matrix from './components/Matrix'

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/LanguageSelection" element={<LanguageSelection />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/VolunteerPersonalArea" element={<VolunteerPersonalArea />} />
          <Route path="/HelpRequestForm" element={<HelpRequestForm />} />
          <Route path="/Matrix" element={<Matrix />} />

        </Routes>
      </Router>

    </>

    // <NavigationContainer>
    //        <Stack.Navigator>
    //       <Stack.Screen name="LanguageSelection" component={LanguageSelection} />

    //       <Stack.Screen name="LoginScreen" component={LoginScreen} />

    //        </Stack.Navigator>
    //      </NavigationContainer> 



  );
};

export default App;













// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from "./components/Homescreen";
// import Invitation from "./components/Invitation";
// import DriverEnter from './components/DriverEnter';
// import ScheduleExcel from './components/ScheduleExcel';
// import ManagerCode from './components/ManagerCode';
// import MessegeDriver from './components/MessegeDriver';
// import Travel from './components/Travel';
// import MessegeUsers from './components/MessegeUsers';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//    <NavigationContainer>
//       <Stack.Navigator>
//       {/* <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Invitation" component={Invitation} />
//       <Stack.Screen name="Driver" component={DriverEnter} />
//       <Stack.Screen name="MessegeDriver" component={MessegeDriver} />
//       <Stack.Screen name="ScheduleExcel" component={ScheduleExcel} />
//       <Stack.Screen name="Manager" component={ManagerCode} />
//       <Stack.Screen name="Travel" component={Travel} /> */}
//       <Stack.Screen name="MessegeUsers" component={MessegeUsers} />

//       </Stack.Navigator>
//     </NavigationContainer>
// );
// }
