import React from 'react';
import { Text } from 'react-native';

const MyComponent = ({ selectedOption }) => {
    // אתה יכול להשתמש ב-selectedOption כדי לשמור את האופציה שנבחרה
  
    // טקסט עם משתנים שמשוררים אליו
    // const text = `האופציה הנבחרת היא: ${selectedOption}`;
    const text = `האופציה הנבחרת היא: ${selectedOption}`;

    return (
      <Text>{text}</Text>
    );
  };
  
  export default MyComponent;
  