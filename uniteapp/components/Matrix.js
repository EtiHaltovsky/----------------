// import React, { useState } from 'react';
// import { View, Text } from 'react-native';

// const Matrix = () => {
//   const [matrix, setMatrix] = useState([
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
//   ]);

//   return (
//     <View>
//       {matrix.map((row, rowIndex) => (
//         <View key={rowIndex}>
//           {row.map((cell, cellIndex) => (
//             <Text key={cellIndex}>{cell}</Text>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// export default Matrix;

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Matrix = () => {
    const [matrix, setMatrix] = useState([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);

    return (
        <View style={styles.container}>
            {matrix.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((cell, cellIndex) => (
                        <View key={cellIndex} style={styles.cell}>
                            <Text style={styles.cellText}>{cell}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    row: {
        flexDirection: 'row'
    },
    cell: {
        borderWidth: 1,
        borderColor: 'black',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Matrix;