const express = require('express');
const router = express.Router();
const database = require("../database");


router.get("/", async (req, res) => {
    // Set the search path
    await database.setSchema();

    // Date from
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    
    const date = `${year}-${month}-${day}`;

    // For the next week
    const interval = '7';
    
    // Select the number of rows from date to date + interval
    const allBookings = await database.getRoomBookings(date, interval);

    // Select the number of available rooms
    const res2 = await database.getAllAvailableRooms();

    // Select the number of available rooms
    const res3 = await database.getAllUnavailableRooms();

    // Select the number of checked out rooms
    const res4 = await database.getAllCheckOutRooms();

    console.log(allBookings)

    // Append the data to send to ejs file
    const data = {
        "bookings": {
            "no": allBookings.rowCount,
            "room_no": allBookings.rows.map(row => row.r_no),
            "room_type": allBookings.rows.map(row => row.r_class),
        },
        "available": {
            "no": res2.rowCount,
            "room_no": res2.rows.map(row => row.r_no),
            "room_type": res2.rows.map(row => row.r_class),
        },
        "unavailable": {
            "no": res3.rowCount,
            "room_no": res3.rows.map(row => row.r_no),
            "room_type": res3.rows.map(row => row.r_class),
            "room_status": res3.rows.map(row => row.r_status),
        },
        "checked_out": {
            "no": res4.rowCount,
            "room_no": res4.rows.map(row => row.r_no),
            "room_type": res4.rows.map(row => row.r_class),
        },
    };

    // Log Data
    res.send(data)
})

module.exports = router;