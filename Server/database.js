const poolConfig = require("./config");

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


// Get all bookings from a 'date' for the next 'interval' days
async function getRoomBookings(date, interval){
    const qry = `
        SELECT *
        FROM roombooking rb, room r
        WHERE rb.r_no = r.r_no
        and rb.checkin >= '${date}'::date AND rb.checkin < '${date}'::date + INTERVAL '${interval} days';
    `
    try {
        // Set the search path before creating the table
        await setSchema();
        const response = (await pool.query(qry));
        return response
      }
    catch (error) {
        console.error("Error getting room bookings:", error);
    }
}

// Get all rooms that are available
async function getAllAvailableRooms(){
    const qry = `
        SELECT *
        FROM room
        WHERE r_status = 'A';
    `
    try {
        // Set the search path before creating the table
        await setSchema();
        const response = (await pool.query(qry));
        return response
    }
    catch (error) {
        console.error("Error getting available rooms:", error);
    }
}

// Get all rooms that are unavailable
async function getAllUnavailableRooms(){
    const qry = `
        SELECT *
        FROM room
        WHERE r_status <> 'A';
    `
    try {
        // Set the search path before creating the table
        await setSchema();
        const response = (await pool.query(qry));
        return response
    }
    catch (error) {
        console.error("Error getting available rooms:", error);
    }
}

// Get all rooms that are checked out
async function getAllCheckOutRooms(){
    const qry = `
        SELECT *
        FROM room
        WHERE r_status = 'X';
    `
    try {
        // Set the search path before creating the table
        await setSchema();
        const response = (await pool.query(qry));
        return response
    }
    catch (error) {
        console.error("Error getting checked out rooms:", error);
    }
}


// Export the pool
module.exports = {
  pool,
  setSchema,
  getRoomBookings,
  getAllAvailableRooms,
  getAllUnavailableRooms,
  getAllCheckOutRooms,

};
