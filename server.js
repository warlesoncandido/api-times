const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;


const estadosRouters = require("./routers/estados");
const timesRouters = require("./routers/times");
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/estados',estadosRouters);
app.use('/times',timesRouters);

app.listen(port,()=>{console.log(`Server running in ${port}`)});