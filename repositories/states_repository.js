    const db = require("../db"); 

    async function selectStates(){
        const coon = await db.connect();
        const [rows] =  await coon.query(" SELECT * FROM estados");
        return rows;
    }

    async function insertState(state){
        const coon = await db.connect();
        const sql =  "INSERT INTO estados(name,uf)values(?,?)";
        const values = [state.name,state.uf];
        await coon.query(sql,values);
    }

    async function deleteState(id){
        const coon = await db.connect();
        const sql = "DELETE from estados WHERE id=?;";
        const values = [id];
        return await coon.query(sql,values);
    }

    async function updateState(state){
        const coon = await db.connect();
        const sql = "UPDATE estados SET name = ?,uf = ? WHERE id=?;";
        const values = [state.name,state.uf,state.id];
        return await coon.query(sql,values);
    }

    module.exports = {selectStates,insertState,deleteState,updateState}
