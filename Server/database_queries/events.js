const poolConfig = require("../config");
const { Pool } = require("pg");
const pool = new Pool(poolConfig);

async function setSchema() {
    try {
        await pool.query("SET search_path TO hotelbooking,public;");
    } 
    catch (error) {
        console.error("Error setting search path:", error);
    }
}

async function getEventsInfo(){
    const qry = `select * from events;`;

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error getting events information: " + error;
    }
    return response
}

module.exports = {
    getEventsInfo
}