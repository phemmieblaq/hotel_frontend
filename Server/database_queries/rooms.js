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

// Get info for the cards in Accomodation and Home
async function getRatesForClass(){
    const qry = `
    SELECT
    rates.*,
    COUNT(room.r_no) AS available_rooms
    FROM
    rates
    LEFT JOIN
    room ON rates.r_class = room.r_class AND room.r_status = 'A'
    GROUP BY
    rates.r_class, rates.price, rates.dimention, rates.no_people, rates.description1, rates.description2, rates.all_rooms_include;
`
    try {
        // Set the search path before creating the table
        await setSchema();
        const response = (await pool.query(qry));
        return response
    }
    catch (error) {
        console.error("Error getting Card information:", error);
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

// Get a random room based on the type specified
async function getRandomRoom(r_class){
    const qry = `SELECT r_no
    FROM room
    WHERE r_class = '${r_class}' AND r_status = 'A'
    ORDER BY random()
    LIMIT 1;`

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Room Type fully booked: " + error;
    }
    return response
}

// Get all rooms that are unavailable
async function getAllUnavailableRooms(){
    const qry = `
        SELECT *
        FROM room
        WHERE r_status = 'O';
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
        WHERE r_status = 'C';
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

// Update room availability
async function updateRoomAvaliability(r_no, r_status){
    const qry = `UPDATE room SET r_status = '${r_status}' WHERE r_no = ${r_no};`;

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
    getAllAvailableRooms,
    getAllCheckOutRooms,
    getAllUnavailableRooms,
    updateRoomAvaliability,
    getRandomRoom,
    getRatesForClass
}