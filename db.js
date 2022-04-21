require('dotenv').config();
async function connect() {
    if(global.connection && global.connection.state != "disconnected"){
        return global.connection;
    }
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: process.env.URL_STRING,
        user: process.env.ROOT_STRING,
        database: process.env.DB_STRING,
        password: process.env.PASS_STRING,
        port: process.env.PORT_INT
      });
    global.connection = connection;
    console.log("Conectamos ao banco");
    return connection;
}


module.exports = {connect};