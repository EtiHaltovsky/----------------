// function hungarianAlgorithm(matrix) {
//     // Step 1: Subtract the minimum value of each row from all elements of that row
//     const n = matrix.length;
//     const rowMinValues = new Array(n).fill(Infinity);
  
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (matrix[i][j] < rowMinValues[i]) {
//           rowMinValues[i] = matrix[i][j];
//         }
//       }
//     }
  
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         matrix[i][j] -= rowMinValues[i];
//       }
//     }
  
//     // Step 2: Subtract the minimum value of each column from all elements of that column
//     const colMinValues = new Array(n).fill(Infinity);
  
//     for (let j = 0; j < n; j++) {
//       for (let i = 0; i < n; i++) {
//         if (matrix[i][j] < colMinValues[j]) {
//           colMinValues[j] = matrix[i][j];
//         }
//       }
//     }
  
//     for (let j = 0; j < n; j++) {
//       for (let i = 0; i < n; i++) {
//         matrix[i][j] -= colMinValues[j];
//       }
//     }
  
//     // Step 3: Find a minimum cover using the alternating tree method
//     const rowCover = new Array(n).fill(false);
//     const colCover = new Array(n).fill(false);
//     const assignments = new Array(n).fill(-1);
  
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (matrix[i][j] === 0 && !rowCover[i] && !colCover[j]) {
//           rowCover[i] = true;
//           colCover[j] = true;
//           assignments[i] = j;
//           break;
//         }
//       }
//     }
  
//     while (true) {
//       let allCovered = true;
//       for (let i = 0; i < n; i++) {
//         if (!rowCover[i]) {
//           allCovered = false;
//           break;
//         }
//       }
//       if (allCovered) {
//         break;
//       }
  
//       let pathFound = false;
//       let zeroRow = -1;
//       let zeroCol = -1;
  
//       for (let i = 0; i < n; i++) {
//         if (!rowCover[i]) {
//           for (let j = 0; j < n; j++) {
//             if (!colCover[j] && matrix[i][j] === 0) {
//               zeroRow = i;
//               zeroCol = j;
//               pathFound = true;
//               break;
//             }
//           }
//         }
//         if (pathFound) {
//           break;
//         }
//       }
  
//       if (!pathFound) {
//         // Step 5: Find the minimum uncovered value and subtract it from all uncovered rows, then add it to all covered columns
//         let minUncoveredValue = Infinity;
//         for (let i = 0; i < n; i++) {
//           if (!rowCover[i]) {
//             for (let j = 0; j < n; j++) {
//               if (!colCover[j] && matrix[i][j] < minUncoveredValue) {
//                 minUncoveredValue = matrix[i][j];
//               }
//             }
//           }
//         }
  
//         for (let i = 0; i < n; i++) {
//           if (rowCover[i]) {
//             for (let j = 0; j < n; j++) {
//               matrix[i][j] += minUncoveredValue;
//             }
//           }
//           if (!colCover[i]) {
//             for (let j = 0; j < n; j++) {
//               matrix[i][j] -= minUncoveredValue;
//             }
//           }
//         }
//       } else {
//         // Step 4: Add the zero cell to the alternating tree and remove the row cover of its row and the column cover of its column
//         const path = [[zeroRow, zeroCol]];
//         let lastRow = zeroRow;
//         let lastCol = zeroCol;
  
//         while (true) {
//           let newRow = -1;
//           let newCol = -1;
  
//           for (let j = 0; j < n; j++) {
//             if (matrix[lastRow][j] === 0 && j !== lastCol) {
//               if (colCover[j]) {
//                 newCol = j;
//                 break;
//               } else {
//                 for (let i = 0; i < n; i++) {
//                   if (matrix[i][j] === 0 && i !== lastRow) {
//                     if (rowCover[i]) {
//                       newRow = i;
//                       newCol = j;
//                       break;
//                     } else if (newRow === -1) {
//                       newRow = i;
//                       newCol = j;
//                     }
//                   }
//                 }
//               }
//             }
//             if (newCol !== -1) {
//               break;
//             }
//           }
  
//           if (newCol !== -1) {
//             path.push([newRow, newCol]);
//             lastRow = newRow;
//             lastCol = newCol;
//           } else {
//             // Step 5: Find the minimum uncovered value and subtract it from all uncovered rows, then add it to all covered columns
//             let minUncoveredValue = Infinity;
//             for (let i = 0; i < n; i++) {
//               if (!rowCover[i]) {
//                 for (let j = 0; j < n; j++) {
//                   if (!colCover[j] && matrix[i][j] < minUncoveredValue) {
//                     minUncoveredValue = matrix[i][j];
//                   }
//                 }
//               }
//             }
  
//             for (let i = 0; i < n; i++) {
//               if (rowCover[i]) {
//                 for (let j = 0; j < n; j++) {
//                   matrix[i][j] += minUncoveredValue;
//                 }
//               }
//               if (!colCover[i]) {
//                 for (let j = 0; j < n; j++) {
//                   matrix[i][j] -= minUncoveredValue;
//                 }
//               }
//             }
  
//             for (let i = 0; i < path.length; i++) {
//               rowCover[path[i][0]] = !rowCover[path[i][0]];
//               colCover[path[i][1]] = !colCover[path[i][1]];
//             }
  
//             break;
//           }
//         }
//         if (lastCol !== -1) {
//           for (let i = 0; i < path.length; i++) {
//             rowCover[path[i][0]] = !rowCover[path[i][0]];
//             colCover[path[i][1]] = !colCover[path