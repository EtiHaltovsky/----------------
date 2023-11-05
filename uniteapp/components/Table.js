import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const Table = () => {
  const N = 5;
  const [matrix, setMatrix] = useState(Array(N).fill(Array(N).fill(0)));

  const handleInputChange = (value, row, col) => {
    const updatedMatrix = matrix.map((rowArray, i) =>
      i === row ? rowArray.map((cell, j) => (j === col ? parseInt(value) || 0 : cell)) : rowArray
    );
    setMatrix(updatedMatrix);
  };

  //פונקציה של חישוב האילוצים-המשקלים
  const computeIndices = () => {

    // Implement your logic here to compute indices using the Munkres algorithm
    // You can refer to the original JavaScript code provided for reference
    // Make use of the 'matrix' state variable
  };

  return (
    <View>
      <Text>Total Cost: </Text>
      <TextInput value={computeIndices().toString()} editable={false} />

      <Text>Indices: </Text>
      {/* <TextInput value={computeIndices().toString()} editable={false} /> */}

      <View style={{ flexDirection: 'row' }}>
        {matrix.map((row, i) => (
          <View key={i} style={{ flexDirection: 'column' }}>
            {row.map((cell, j) => (
              <TextInput
                key={j}
                value={cell.toString()}
                onChangeText={(value) => handleInputChange(value, i, j)}
                style={{ borderWidth: 1, borderColor: '#000', width: 50, height: 30, padding: 5 }}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Table;
