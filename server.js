const express = require('express');
const app = express();
const cors = require('cors')


const estadosRouters = require("./routers/estados");
const timesRouters = require("./routers/times");
app.use(cors());

app.use('/estados',estadosRouters);
app.use('/times',timesRouters);

app.listen(3000,()=>{console.log('Server running')});