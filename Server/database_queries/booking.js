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

async function makeBooking(c_no, b_cost, b_outstanding, b_notes){
    const qry = `INSERT INTO booking (c_no, b_cost, b_outstanding, b_notes)
    values (${c_no}, ${b_cost}, ${b_outstanding}, '${b_notes}') RETURNING b_ref;`

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error Making booking: " + error;
    }
    return response
}

// insert into roomBooking
async function makeRoomBooking(r_no, b_ref, checkin, checkout){
    const qry = `insert into roombooking values (${r_no}, ${b_ref}, '${checkin}', '${checkout}');`

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error Making booking: " + error;
    }
    return response
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


module.exports = {
    getRoomBookings,
    makeRoomBooking,
    makeBooking
}