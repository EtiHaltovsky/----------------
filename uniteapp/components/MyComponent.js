import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// const navigation = useNavigation();
import { useNavigation } from '@react-navigation/native';

// import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
    // const navigation = useNavigation();
    const handleHelp = () => {
        navigation.navigate('AddRecipient');
      };
    
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
          source={require('/images/logo.png')}
          style={styles.image}
        />
      </View>
       <Text style={[styles.text, styles.topLeft]}>גיהוץ למשפחות</Text>
       <Text style={[styles.text, styles.topRight]}>הסעת חולים</Text>
       <Text style={[styles.text, styles.bottomLeft]}>העברת חבילות</Text>
       <Text style={[styles.text, styles.bottomRight]}>קניות למשפחה</Text>
       <Text style={[styles.text, styles.center]}>שמירה על ילדים בבתי חולים</Text>
       <Text style={[styles.text, styles.additionalText]}>סיוע למבוגרים</Text>
       <Text style={[styles.text, styles.styleLocation]}>שמירה במחלקות שונות</Text>
       <Text style={[styles.text, styles.Location]}>הסעת נכים</Text>

       <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleHelp}>לבקשת עזרה</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    position:'absolute',
    

  },

  button: {
    width: 200,
    height: 50,
    // borderRadius: 25,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 90,
    // marginLeft:400
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignItems:'center',
  },
    topLeft: {
    top: '50%',
    left: '25%',
    transform: [{ translateX: -75 }, { translateY: -9 }],
   
  },
  topRight: {
    top: '50%',
    left: '75%',
    transform: [{ translateX: -75 }, { translateY: -9 }],
  },
  bottomLeft: {
    top: '75%',
    left: '25%',
    transform: [{ translateX: -75 }, { translateY: -9 }],
  },
  bottomRight: {
    top: '75%',
    left: '75%',
    transform: [{ translateX: -75 }, { translateY: -9 }],
  },
  center: {
    top: '100%',
    left: '50%',
    transform: [{ translateX: -75 }, { translateY: -9 }],
  },
  additionalText: {
    top: '40%',
    left: '80%',
    transform: [{ translateX: -75 }, { translateY: -9 }],
  },
  styleLocation: {
    top: '110%',
    left: '15%',
    transform: [{ translateX: -75 }, { translateY: -9 }],
  },
  Location: {
    top: '150%',
    left: '90%',
    transform: [{ translateX: -75 }, { translateY: -9 }],
  },
});



export default MyComponent;

