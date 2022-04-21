const db = require("../db"); 


async function selectTeams(uf){
    const coon = await db.connect();
    const [rows] =  await coon.query("SELECT * FROM times");
    return rows;
}

async function selectTeamsByState(uf){
    const coon = await db.connect();
    console.log(uf);
    const sql = `SELECT * FROM times WHERE estado=? `;
    const values = [uf];
    const [rows] = await  coon.query(sql,values);
    return rows;
}

async function insertTeams(team){
    const coon = await db.connect();
    const sql =  "INSERT INTO times(estado,time,sigla,url)values(?,?,?,?)";
    const values = [team.estado,team.time,team.sigla,team.url];
    await coon.query(sql,values);
}

async function deleteTeams(id){
    const coon = await db.connect();
    const sql = "DELETE from times WHERE id=?;";
    const values = [id];
    return await coon.query(sql,values);
}

async function updateTeams(team){
    const coon = await db.connect();
    const sql = "UPDATE times SET estado = ?,time = ? , sigla=?,url=? WHERE id=?;";
    const values = [team.estado,team.time,team.sigla,team.url,team.id];
    return await coon.query(sql,values);
}

module.exports = {selectTeams,selectTeamsByState,insertTeams,deleteTeams,updateTeams}