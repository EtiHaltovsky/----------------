// // const graph = {
// //     A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
// //     B: [{ node: 'D', distance: 4 }],
// //     C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
// //     D: [{ node: 'A', distance: 1 }],
// //   };
  
// //   // graph, המייצג את הגרף המשוקלל, ו-startNode, שהוא הצומת שממנו מתחילים את האלגוריתם.
// //   function dijkstra(graph, startNode) {
// //     // כדי לאחסן את המרחקים הקצרים ביותר מצומת ההתחלה לכל צומת
// //     const distances = {};
// //     // כדי לעקוב אחר צמתים שביקרו בהם
// //     const visited = {};
// //     // כדי לאחסן את הצמתים שעדיין לא ביקרו בהם
// //     if (graph && typeof graph === 'object') {
// //       const unvisited = Object.keys(graph);
// //      }
// //     // const unvisited = Object.keys(graph);
// //     // מגדיר את המרחק הראשוני של צומת ההתחלה ל-0 באובייקט המרחקים
// //     let currentNode = startNode;
// //     let currentDistance = 0;
// //     distances[startNode] = 0;
     
// //     // לולאת while שנמשכת עד שנותרו צמתים שלא ביקרו בהם.
// //     while (unvisited.length) {
// //       // חוזר על השכנים של ה-currentNode, שהוא בהתחלה צומת ההתחלה.
// //       graph[currentNode].forEach((neighbor) => {
// //         // עבור כל שכן שלא ביקר
// //         if (!visited[neighbor.node]) {
// //           // מחשב את המרחק על ידי הוספת המרחק של השכן למרחק הנוכחי
// //           const distance = neighbor.distance + currentDistance;
// //           // אם המרחק המחושב הזה קטן מהמרחק הקיים המאוחסן באובייקט המרחקים או אם הצומת השכן אינו קיים במרחקים
// //           if (!distances[neighbor.node] || distance < distances[neighbor.node]) {
// //             // מעדכן את אובייקט המרחקים עם המרחק הקטן יותר
// //             distances[neighbor.node] = distance;
// //           }
// //         }
// //       });
// //       // הוספתו לאובייקט visited
// //       visited[currentNode] = true;
// //       //unvisited מסיר אותו מהמערך 
// //       unvisited.splice(unvisited.indexOf(currentNode), 1);
// //       // מוצא את הצומת הלא ביקר הבא עם המרחק הקטן ביותר על ידי שימוש בשיטת ההפחתה במערך הunvisited ,
// //       const nextNode = unvisited.reduce((minNode, node) => {
// //         // השוואת מרחקים המאוחסנים באובייקט המרחקים
// //         if (distances[node] && distances[node] < distances[minNode]) {
// //           return node;
// //         }
// //         return minNode;
// //       }, unvisited[0]);
// //       // מעדכן את הצומת הנוכחי ואת המרחק הנוכחי עם הצומת הבא והמרחק שלו
// //       currentDistance = distances[nextNode];
// //       currentNode = nextNode;
// //     }
// //     // מחזיר את אובייקט המרחקים המכיל את המרחקים הקצרים ביותר מצומת ההתחלה לכל שאר הצמתים בגרף
// //     return distances;
// //   }
  
// //   const shortestDistances = dijkstra(graph, 'A');
// //   console.log(shortestDistances);
  
// //   module.exports = {
// //     dijkstra,
// //   };
  


























// // // const PreferencesModel = require('../models/PreferencesModel')
// // // const volunteerModel = require('../models/volunteerModel')
// // // const newRequestsModel = require('../models/newRequestsModel');
// // // const volunteer = require('../models/volunteerModel');


// // // const graph = {
// // //     A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
// // //     B: [{ node: 'D', distance: 4 }],
// // //     C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
// // //     D: [{ node: 'A', distance: 1 }],
// // //   };
  
// // //   const shortestDistances = dijkstra(graph, 'A');
// // //   console.log(shortestDistances);
  
  
// // //   function dijkstra(graph, startNode) {
// // //     const distances = {};
// // //     const visited = {};
// // //     const unvisited = Object.keys(graph);
// // //     let currentNode = startNode;
// // //     let currentDistance = 0;
// // //     distances[startNode] = 0;
  
// // //     while (unvisited.length) {
// // //       graph[currentNode].forEach((neighbor) => {
// // //         if (!visited[neighbor.node]) {
// // //           const distance = neighbor.distance + currentDistance;
// // //           if (!distances[neighbor.node] || distance < distances[neighbor.node]) {
// // //             distances[neighbor.node] = distance;
// // //           }
// // //         }
// // //       });
  
// // //       visited[currentNode] = true;
// // //       unvisited.splice(unvisited.indexOf(currentNode), 1);
  
// // //       const nextNode = unvisited.reduce((minNode, node) => {
// // //         if (distances[node] && distances[node] < distances[minNode]) {
// // //           return node;
// // //         }
// // //         return minNode;
// // //       }, unvisited[0]);
  
// // //       currentDistance = distances[nextNode];
// // //       currentNode = nextNode;
// // //     }
  
// // //     return distances;
// // //   }
  
  
// // //   dijkstra(graph, 'A');
  

// // //   module.exports = {
// // //     dijkstra,


// // // };
  
// //   // const { findShortestPath } = require('dijkstra-shortest-path');
  
// //   // function calculateDistancePrice(userCode, volunteers, kmPrices) {
// //   //   // מציאת המתנדב על פי קוד המשתמש
// //   //   const volunteer = volunteers.find((volunteer) => volunteer.code === userCode);
  
// //   //   if (!volunteer) {
// //   //     throw new Error('המשתמש לא נמצא');
// //   //   }
  
// //   //   const { km, kamshe } = volunteer;
  
// //   //   // מציאת המחיר לכל קמ ולכל קמ"ש
// //   //   const kmPrice = kmPrices.km;
// //   //   const kamshePrice = kmPrices.kamshe;
  
// //   //   // חישוב המחיר הכולל
// //   //   const distancePrice = km * kmPrice + kamshe * kamshePrice;
  
// //   //   return distancePrice;
// //   // }
  
// //   // // דוגמה לשימוש בפונקציה
// //   // const volunteers = [
// //   //   { code: '001', km: 10, kamshe: 3 },
// //   //   { code: '002', km: 5, kamshe: 1 },
// //   //   { code: '003', km: 7, kamshe: 2 },
// //   // ];
  
// //   // const kmPrices = {
// //   //   km: 2,
// //   //   kamshe: 5,
// //   // };
  
// //   // const userCode = '002';
  
// //   // const distancePrice = calculateDistancePrice(userCode, volunteers, kmPrices);
// //   // console.log(distancePrice);
  

// // const graph = {
// //   A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
// //   B: [{ node: 'D', distance: 4 }],
// //   C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
// //   D: [{ node: 'A', distance: 1 }],
// // };

// // function dijkstra(graph, startNode) {
// //   const distances = {};
// //   const visited = {};
// //   let unvisited = Object.keys(graph); // Declare unvisited outside the if statement

// //   if (graph && typeof graph === 'object') {
// //     unvisited = Object.keys(graph); // Update unvisited inside the if block
// //   }

// //   let currentNode = startNode;
// //   let currentDistance = 0;
// //   distances[startNode] = 0;

// //   // Rest of the code...
// // }

// // const shortestDistances = dijkstra(graph, 'A');
// // console.log(shortestDistances);

// // module.exports = {
// //   dijkstra,
// // };

  

// // const graph = {
// //   A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
// //   B: [{ node: 'D', distance: 4 }],
// //   C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
// //   D: [{ node: 'A', distance: 1 }],
// // };


// const graph = {
//   A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
//   B: [{ node: 'D', distance: 4 }],
//   C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
//   D: [{ node: 'A', distance: 1 }],
//   E: [], // צומת E נוסף כצומת ריקה לגרף
// };

// function dijkstra(graph, startNode) {
//   const distances = {};
//   const visited = {};
//   let unvisited = [];

//   if (graph && typeof graph === 'object') {
//     unvisited = Object.keys(graph);
//   }

//   let currentNode = startNode;
//   let currentDistance = 0;
//   distances[startNode] = 0;

//   while (unvisited.length) {
//     graph[currentNode].forEach((neighbor) => {
//       if (!visited[neighbor.node]) {
//         const distance = neighbor.distance + currentDistance;
//         if (!distances[neighbor.node] || distance < distances[neighbor.node]) {
//           distances[neighbor.node] = distance;
//         }
//       }
//     });

//     visited[currentNode] = true;
//     unvisited.splice(unvisited.indexOf(currentNode), 1);

//     const nextNode = unvisited.reduce((minNode, node) => {
//       if (distances[node] && distances[node] < distances[minNode]) {
//         return node;
//       }
//       return minNode;
//     }, unvisited[0]);

//     currentDistance = distances[nextNode];
//     currentNode = nextNode;
//   }
//   console.log(distances);

//   // return distances;
// }

// const shortestDistances = dijkstra(graph, 'A');
// // console.log(shortestDistances);
// return shortestDistances;



// module.exports = {
//   dijkstra,
//   shortestDistances,
// };

function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  let unvisited = [];

  if (graph && typeof graph === 'object') {
    unvisited = Object.keys(graph);
  }

  let currentNode = startNode;
  let currentDistance = 0;
  distances[startNode] = 0;

  while (unvisited.length) {
    graph[currentNode].forEach((neighbor) => {
      if (!visited[neighbor.node]) {
        const distance = neighbor.distance + currentDistance;
        if (!distances[neighbor.node] || distance < distances[neighbor.node]) {
          distances[neighbor.node] = distance;
        }
      }
    });

    visited[currentNode] = true;
    unvisited.splice(unvisited.indexOf(currentNode), 1);

    let nextNode = unvisited[0];
    let minDistance = distances[nextNode];

    for (let i = 1; i < unvisited.length; i++) {
      const node = unvisited[i];
      if (distances[node] < minDistance) {
        nextNode = node;
        minDistance = distances[node];
      }
    }

    currentDistance = minDistance;
    currentNode = nextNode;
  }

  return distances;
}

const graph = {
  A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
  B: [{ node: 'D', distance: 4 }],
  C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
  D: [{ node: 'A', distance: 1 }],
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);

module.exports = {
  dijkstra,
  shortestDistances,
};

// const shortestDistances = dijkstra(graph, 'A');
// console.log(shortestDistances);

// module.exports = {
//   dijkstra,
//   // shortestDistances,
// };
// const graph = {
//   A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
//   B: [{ node: 'D', distance: 4 }],
//   C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
//   D: [{ node: 'A', distance: 1 }],
// };

// function dijkstra(graph, startNode) {
//   const distances = {};
//   const visited = {};
//   let unvisited = [];

//   if (graph && typeof graph === 'object') {
//     unvisited = Object.keys(graph);
//   }

//   let currentNode = startNode;
//   let currentDistance = 0;
//   distances[startNode] = 0;

//   while (unvisited.length) {
//     graph[currentNode].forEach((neighbor) => {
//       if (!visited[neighbor.node]) {
//         const distance = neighbor.distance + currentDistance;
//         if (!distances[neighbor.node] || distance < distances[neighbor.node]) {
//           distances[neighbor.node] = distance;
//         }
//       }
//     });

//     visited[currentNode] = true;
//     unvisited.splice(unvisited.indexOf(currentNode), 1);

//     const nextNode = unvisited.reduce((minNode, node) => {
//       if (distances[node] && distances[node] < distances[minNode]) {
//         return node;
//       }
//       return minNode;
//     }, unvisited[0]);

//     currentDistance = distances[nextNode];
//     currentNode = nextNode;
//   }

//   return distances;
// }

// const shortestDistances = dijkstra(graph, 'A');
// console.log(shortestDistances);

// module.exports = {
//   dijkstra,
//   shortestDistances,
// };
