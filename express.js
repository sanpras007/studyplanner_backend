const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const conn = require('./services/db');
conn.dbConnection();

const studyPlannerRoutes = require('./routes/studyPlannerRoutes');
app.use('/api/v1/studyplanner', studyPlannerRoutes);

app.use('/*', (req, res) => {
    res.status(404).send("No route found");
});

app.listen(4000, () => console.log(`Server connected to port: 4000`));
