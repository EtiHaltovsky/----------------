
// const express = require('express');
// const dijkstraController = require('../controllers/dijkstraController');
// const router = express.Router();


// module.exports = router;

// const express = require('express');
// const dijkstraController = require('../controllers/dijkstraController');
// const router = express.Router();


// router.route('/').get(async(req, res) => {
//    const result = await dijkstraController.shortestDistances();
//    res.json(result);
// });
// module.exports = router;


const express = require('express');
const { dijkstra } = require('../controllers/dijkstraController');

const router = express.Router();
router.route('/').get(async (req, res) => {
// router.get('/shortest-distances', (req, res) => {
  const graph = {
    A: [{ node: 'B', distance: 5 }, { node: 'C', distance: 2 }],
    B: [{ node: 'D', distance: 4 }],
    C: [{ node: 'B', distance: 1 }, { node: 'D', distance: 1 }],
    D: [{ node: 'A', distance: 1 }],
  };
// // router.route('/').get(async (req, res) => {
// //   const result = dijkstraController.dijkstra(dijkstraController.graph,'A');
// //   res.json(result);
// // });
  const startNode = 'A';
  const shortestDistances = dijkstra(graph, startNode);
  res.json(shortestDistances);
});

module.exports = router;
