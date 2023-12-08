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
// ========================================== Customers ========================================================
// Add new customer
async function addNewCustomer(c_name, c_email, c_address, c_cardtype, c_cardexp, c_cardno, c_phoneno){
    const qry = `
        INSERT INTO customer (c_name, c_email, c_address, c_cardtype, c_cardexp, c_cardno, c_phoneno)
        VALUES ('${c_name}', '${c_email}', '${c_address}', '${c_cardtype}', '${c_cardexp}', '${c_cardno}', '${c_phoneno}') RETURNING c_no;
    `
    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error Adding Customer: " + error;
    }
    return response
}

async function addIntoLogin(c_no, c_password){
    const qry = `insert into login values(${c_no},'${c_password}');`;

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error Adding Into Login Table: " + error;
    }
    return response
}

// Get customer ID through email
async function getCustomerNumber(c_email){
    const qry = `select c_no from customer where c_email='${c_email}'`

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

// ========================================== Rooms ========================================================
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
        response = "Error Making booking: " + error;
    }
    return response
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
// ========================================== Booking ========================================================
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

// occupied, cleaned, not available, available

// ========================================== RoomBooking ========================================================

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

// ========================================== Events ========================================================

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

// ========================================== Login ========================================================
async function getPassword(c_no){
    const qry = `select c_password from login where c_no = ${c_no};`;

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error retriving password: " + error;
    }
    return response
}

// ========================================== Reservation ========================================================
// Populate the reservations page
async function populateResservationPage(c_no){
    const qry = `select c.c_name, c.c_email, c.c_phoneno, b.b_ref, b.b_cost, b.b_outstanding, rb.r_no, rb.checkin,
                rb.checkout, (rb.checkout - rb.checkin) AS days_reserved
                from booking b, roombooking rb, customer c
                where b.b_ref = rb.b_ref
                and c.c_no = b.c_no
                and b.c_no = ${c_no};`;

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

// ========================================== Managment ========================================================
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

// Export the pool
module.exports = {
  pool,
  setSchema,
  getRoomBookings,
  getAllAvailableRooms,
  getAllUnavailableRooms,
  getAllCheckOutRooms,
  addNewCustomer,
  getCustomerNumber,
  makeBooking,
  getRandomRoom,
  makeRoomBooking,
  getRatesForClass,
  getEventsInfo,
  getPassword,
  addIntoLogin,
  populateResservationPage,
  updateRoomAvaliability,
  getAllBookings
};
