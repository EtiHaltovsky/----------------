const graph = {
  A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
  B: [{ node: 'D', distance: 4 }],
  C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
  D: [{ node: 'A', distance: 1 }],
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);


function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const unvisited = Object.keys(graph);
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

    const nextNode = unvisited.reduce((minNode, node) => {
      if (distances[node] && distances[node] < distances[minNode]) {
        return node;
      }
      return minNode;
    }, unvisited[0]);

    currentDistance = distances[nextNode];
    currentNode = nextNode;
  }

  return distances;
}


dijkstra(graph, startNode);


// const { findShortestPath } = require('dijkstra-shortest-path');

// function calculateDistancePrice(userCode, volunteers, kmPrices) {
//   // מציאת המתנדב על פי קוד המשתמש
//   const volunteer = volunteers.find((volunteer) => volunteer.code === userCode);

//   if (!volunteer) {
//     throw new Error('המשתמש לא נמצא');
//   }

//   const { km, kamshe } = volunteer;

//   // מציאת המחיר לכל קמ ולכל קמ"ש
//   const kmPrice = kmPrices.km;
//   const kamshePrice = kmPrices.kamshe;

//   // חישוב המחיר הכולל
//   const distancePrice = km * kmPrice + kamshe * kamshePrice;

//   return distancePrice;
// }

// // דוגמה לשימוש בפונקציה
// const volunteers = [
//   { code: '001', km: 10, kamshe: 3 },
//   { code: '002', km: 5, kamshe: 1 },
//   { code: '003', km: 7, kamshe: 2 },
// ];

// const kmPrices = {
//   km: 2,
//   kamshe: 5,
// };

// const userCode = '002';

// const distancePrice = calculateDistancePrice(userCode, volunteers, kmPrices);
// console.log(distancePrice);

