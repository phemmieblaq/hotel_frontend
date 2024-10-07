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

// Add new customer
async function addNewCustomer(c_name, c_email, c_phoneno){
    const qry = `
        INSERT INTO customer (c_name, c_email, c_phoneno)
        VALUES ('${c_name}', '${c_email}', '${c_phoneno}') RETURNING c_no;
    `
    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        console.error("Error Adding Customer: " + error);
    }
    return response
}

// Add user pass word
async function addUserPassword(c_no, c_password){
    const qry = `insert into login values(${c_no},'${c_password}');`;

    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error Setting Customer Password: " + error;
    }
    return response
}

// Add user payment Information
async function addUserPaymentDetails(c_no, cType, cExp, cNo){
    const qry = `UPDATE customer
    SET
        c_cardtype = '${cType}',
        c_cardexp = '${cExp}', 
        c_cardno = '${cNo}'      
    WHERE
        c_no = ${c_no};`;
    let response = null;
    try{
        // Set the search path before creating the table
        await setSchema();
        response = (await pool.query(qry));
    }
    catch (error) {
        response = "Error Setting Customer Payment Details: " + error;
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

// Populate the reservations page
async function getUsersReservations(c_no){
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

module.exports = {
    addNewCustomer,
    addUserPassword,
    getCustomerNumber,
    getUsersReservations,
    getPassword,
    addUserPaymentDetails
}