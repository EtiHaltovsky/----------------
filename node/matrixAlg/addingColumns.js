const generateDummyColumns = (rows, columns) => {

// function generateDummyColumns(rows, columns) {
    const matrix = [];
  
    // Step 1: Create an empty matrix with the specified number of columns and rows
    for (let i = 0; i < columns; i++) {
      matrix[i] = [];
    }
  
    // Step 2: Generate dummy values for the columns using the Hungarian algorithm
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // Generate a dummy value for each cell in the column
        matrix[i][j] = generateDummyValue(i, j);
      }
    }
  
    // Step 3: Return the generated matrix
    return matrix;
  }
  
  // Function to generate a dummy value based on the column and row indices
  function generateDummyValue(columnIndex, rowIndex) {
    // You can implement your own logic here to generate the dummy value
    // For example, you can use random numbers, predefined values, or any other algorithm
  
    // Here, I'm using a simple formula to generate a dummy value based on the column and row indices
    return columnIndex * 10 + rowIndex + 1;
  }
  
  // Usage example
//   const rows = 4; // Number of rows
//   const columns = 3; // Number of columns
  
//   const dummyMatrix = generateDummyColumns(rows, columns);
//   console.log(dummyMatrix);

  module.exports = generateDummyColumns;

  