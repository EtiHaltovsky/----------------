// import React, { Component } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// class FormComponent extends Component {
//   state = {
//     gender: '',
//     disabledCar: '',
//     sex: '',
//     volunteer: '',
//     foreignLanguage: '',
//     firstAid: '',
//   };

//   handleInputChange = (fieldName, value) => {
//     this.setState({ [fieldName]: value });
//   };

//   handleSubmit = () => {
//     // כאן תוכלי לעשות שימור של הנתונים במסד הנתונים או לבצע פעולות נוספות
//     console.log('נתונים שנשמרו:', this.state);
//   };

//   render() {
//     const { gender, disabledCar, sex, volunteer, foreignLanguage, firstAid } = this.state;

//     return (
//       <View>
//         <Text>מגדר:</Text>
//         <TextInput value={gender} onChangeText={value => this.handleInputChange('gender', value)} />

//         <Text>רכב נכים:</Text>
//         <TextInput
//           value={disabledCar}
//           onChangeText={value => this.handleInputChange('disabledCar', value)}
//         />

//         <Text>מין:</Text>
//         <TextInput value={sex} onChangeText={value => this.handleInputChange('sex', value)} />

//         <Text>מתנדב מוכר:</Text>
//         <TextInput
//           value={volunteer}
//           onChangeText={value => this.handleInputChange('volunteer', value)}
//         />

//         <Text>דובר שפה זרה:</Text>
//         <TextInput
//           value={foreignLanguage}
//           onChangeText={value => this.handleInputChange('foreignLanguage', value)}
//         />

//         <Text>ידע בעזרה ראשונה:</Text>
//         <TextInput
//           value={firstAid}
//           onChangeText={value => this.handleInputChange('firstAid', value)}
//         />

//         <Button title="שמור נתונים" onPress={this.handleSubmit} />
//       </View>
//     );
//   }
// }

// export default FormComponent;













// import React, { Component } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// // סינטקס להצגת נתונים ושמירתם בעת שינוי...
// {/* <TextField
//   onChange={(name) => this.setState({name})}
//   value={this.state.name}
// /> */}
// class FormComponent extends Component {
//   state = {
//     data: [
//       { id: 1, label: 'מגדר', value: '1' },
//       { id: 2, label: 'רכב נכים', value: '2' },
//       { id: 3, label: 'מין', value: '3' },
//       { id: 4, label: 'מתנדב מוכר', value: '4' },
//       { id: 5, label: 'דובר שפה זרה', value: '5' },
//       { id: 6, label: 'ידע בעזרה ראשונה', value: '6' },
//     ],
//   };

//   handleInputChange = (id, value) => {
//     const newData = this.state.data.map(item => {
//       if (item.id === id) {
//         return { ...item, value };
//       }
//       return item;
//     });

//     this.setState({ data: newData });
//   };

//   handleSubmit = () => {
//     // כאן תוכלי לעשות שימור של הנתונים במסד הנתונים או לבצע פעולות נוספות
//     console.log('נתונים שנשמרו:', this.state.data);
//   };

//   render() {
//     return (
//       <View>
//         {this.state.data.map(item => (
//           <View key={item.id}>
//             <Text>{`${item.label}:`}</Text>
//             <TextInput
//               value={item.value}
//               onChangeText={value => this.handleInputChange(item.id, value)}
//             />
//           </View>
//         ))}
//         <Button title="שמור נתונים" onPress={this.handleSubmit} />
//       </View>
//     );
//   }
// }

// export default FormComponent;










import { useState } from 'react';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonComponent = () => {
  const [buttonValue, setButtonValue] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;
    setButtonValue(value);
    console.log(value)
  };

  return (
    <div>
      <button value="ערך 1" onClick={handleClick}>כפתור 1</button>
      <button value="ערך 2" onClick={handleClick}>כפתור 2</button>
      <button value="ערך 3" onClick={handleClick}>כפתור 3</button>
      <p>הערך הנוכחי: {buttonValue}</p>
    </div>
  );
};
class FormComponent extends Component {
  state = {
    data: [
      { id: 1, label: 'מגדר', value: '1' },
      { id: 2, label: 'רכב נכים', value: '2' },
      { id: 3, label: 'מין', value: '3' },
      { id: 4, label: 'מתנדב מוכר', value: '4' },
      { id: 5, label: 'דובר שפה זרה', value: '5' },
      { id: 6, label: 'ידע בעזרה ראשונה', value: '6' },
    ],
  };

  

  handleButtonClick = (id, number) => {
    const newData = this.state.data.map(item => {
      if (item.id === id) {
        return { ...item, value: number.toString() }
        // console.log(value);
      }
      return item;
    });

    this.setState({ data: newData });
  };

  renderButtons = () => {
    return Array.from({ length: 6 }, (_, index) => index + 1).map(number => (
      <TouchableOpacity
        key={number}
        style={styles.button}
        onPress={() => this.handleButtonClick(1, number)}
        
      >
        <Text style={styles.buttonText}>{number}</Text>
      

      </TouchableOpacity>
    ));
  };

  render() {
    return (
      <View>
         {/* <div>
      <button value="ערך 1" onClick={handleClick}>כפתור 1</button>
      <button value="ערך 2" onClick={handleClick}>כפתור 2</button>
      <button value="ערך 3" onClick={handleClick}>כפתור 3</button>
      <p>הערך הנוכחי: {buttonValue}</p>
    </div> */}
        {this.state.data.map(item => (
          <View key={item.id}>
            <Text>{`${item.label}:`}</Text>
            <View style={styles.buttonContainer}>{this.renderButtons()}</View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // מרווח בין שורות
  },
  button: {
    width: 50,
    height: 30,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5, // מרווח בין כפתורים בשורה
  },
  buttonText: {
    color: 'white',
  },
});

export default FormComponent;

