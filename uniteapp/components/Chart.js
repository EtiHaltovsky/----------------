import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VolunteerTable = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>מתחברים למתנדבים</Text>
      <View style={styles.tableRow}>
        <Text style={styles.tableHeader}>מספר</Text>
        <Text style={styles.tableHeader}>שם המתנדב</Text>
        <Text style={styles.tableHeader}>התנדבויות קודמות</Text>
        <Text style={styles.tableHeader}>התנדבויות הבאות</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableData}>1</Text>
        <Text style={styles.tableData}>דוד כהן</Text>
        <Text style={styles.tableData}>3</Text>
        <Text style={styles.tableData}>5</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableData}>2</Text>
        <Text style={styles.tableData}>רחל לוי</Text>
        <Text style={styles.tableData}>7</Text>
        <Text style={styles.tableData}>4</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableData}>3</Text>
        <Text style={styles.tableData}>יוסף כהן</Text>
        <Text style={styles.tableData}>2</Text>
        <Text style={styles.tableData}>9</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
    width: '25%',
    textAlign: 'center',
  },
  tableData: {
    width: '25%',
    textAlign: 'center',
  },
});

export default VolunteerTable;















// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';

// const VolunteerTable = ({ volunteers }) => {

//   const renderVolunteerRow = ({ item }) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>{item.id}</Text>
//       <Text style={styles.cell}>{item.name}</Text>
//       <Text style={styles.cell}>{item.pastVolunteering}</Text>
//       <Text style={styles.cell}>{item.futureVolunteering}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>מתחברים למתנדבים</Text>
//       <FlatList
//         data={volunteers}
//         renderItem={renderVolunteerRow}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingVertical: 10
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'center'
//   }
// });

// export default VolunteerTable;
