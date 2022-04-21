(async () => {
    require('dotenv').config();
    const express = require('express');
    const db = require('./db');
    const bodyParser = require('body-parser');

    const app = express();
    const cors = require('cors')
    const port = process.env.PORT || 3000;

    const stateRouters = require("./routers/states");
    const teamsRouters = require("./routers/teams");


    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(cors());

    app.get("/", (req, res) => {
        res.send("Hello World");
    })

    app.use('/estados', stateRouters);
    app.use('/times', teamsRouters);

    app.listen(port, () => { console.log(`Server running in ${port}`) });
})();