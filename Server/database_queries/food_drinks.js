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

async function getFood(){
    const qry = `   SELECT *
                    FROM food;`;

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error getting Food data: " + error;
    }
    return response
}

async function getDrinks(){
    const qry = `   SELECT *
                    FROM drinks;`;

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error getting Food data: " + error;
    }
    return response
}

async function addDrinks(r_ref, value){
    const qry = `   UPDATE booking
    SET
      b_cost = b_cost + ${value},
      b_outstanding = b_outstanding + ${value}
    WHERE
      b_ref = ${r_ref};
    `;

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error getting Food data: " + error;
    }
    return response
}

module.exports = {
    getFood,
    getDrinks,
    addDrinks
}