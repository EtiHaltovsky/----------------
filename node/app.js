const express = require('express');
const connectDB = require('./Config/db');
const app = express();
const volunteerRouter = require("./routers/volunteerRouter")
const newRequestsRouter = require("./routers/newRequestsRouter")
const volunteersSkillsRouter = require("./routers/volunteersSkillsRouter")
const queryRouter = require('./routers/queryRouter');
// const ratingsRouter= require("./routers/ratingsRouter")
const recipientRouter = require("./routers/recipientRouter")
const preferencesRouter = require("./routers/preferencesRouter")
const ratingsRouter = require("./routers/ratingsRouter")
const dijkstraRouter = require("./routers/dijkstraRouter")
const distanceRouter = require("./routers/distanceRouter")
const tryRouter = require("./routers/tryRouter")

//const { __make_matrix } = require('./controllers/preferencesController')

// const {printWeightMatrix}=require('./munkers')
// const { getVolunteersWithDisabledVehicle } = require('./controllers/queryController')
const munkersRouter= require("./routers/munkersRouter")
const http = require('http')

const port = 8000;
const cors = require('cors');
app.use(express.json());
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`);
})

const corsOptions = {
    origin: 'http://localhost:19006',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors());

app.use('/volunteers', volunteerRouter);
app.use('/newRequests', newRequestsRouter);
app.use('/volunteersSkills', volunteersSkillsRouter);
app.use('/ratings', ratingsRouter);
app.use('/preferences', preferencesRouter);
app.use('/recipients', recipientRouter);
app.use('/querys', queryRouter);
app.use('/munkers',munkersRouter);
app.use('/dijkstra',dijkstraRouter);
app.use('/distance',distanceRouter);
app.use('/try',tryRouter);
// app.set('view engine', 'ejs');
// app.use('/recipients', recipientRouter);


app.use(express.json());
connectDB();








