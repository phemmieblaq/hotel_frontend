const poolConfig = require("../config");
const { Pool } = require("pg");
const pool = new Pool(poolConfig);


// Set search path
async function setSchema() {
    try {
        await pool.query("SET search_path TO hotelbooking,public;");
    } 
    catch (error) {
        console.error("Error setting search path:", error);
    }
}

async function getAllBookings(){
    const qry = `   SELECT *
                    FROM roombooking rb, room r
                    WHERE rb.r_no = r.r_no;`;

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error getting reservation data: " + error;
    }
    return response
}

module.exports = {
    getAllBookings
}