const express = require('express');
const router = express.Router();
const database_rooms = require("../database_queries/rooms");
const database_booking = require("../database_queries/booking");



router.get("/", async (req, res) => {

    // Date from
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    
    const date = `${year}-${month}-${day}`;

    // // For the next week
    // const interval = '31';
    
    // Select the number of rows from date to date + interval
    const allBookings = await database_booking.getRoomBookings(date);

    // Select the number of available rooms
    const available_rooms = await database_rooms.getAllAvailableRooms();

    // Select the number of available rooms
    const unavailable_rooms = await database_rooms.getAllCheckedInRooms();

    // Select the number of checked out rooms
    const checked_out = await database_rooms.getAllCheckOutRooms();

    // Append the data to send to ejs file
    const data = {
        "bookings": {
            "no": allBookings?allBookings.rowCount:0,
            "room_no": allBookings?allBookings.rows.map(row => row.r_no):[],
            "check_in": allBookings?allBookings.rows.map(row => row.checkin):[],
            "check_out": allBookings?allBookings.rows.map(row => row.checkout):[],
            "room_status": allBookings?allBookings.rows.map(row => row.r_status):[],
            "room_notes": allBookings?allBookings.rows.map(row => row.r_notes):[],
            "booking_ref": allBookings?allBookings.rows.map(row => row.b_ref):[],
            "room_type": allBookings?allBookings.rows.map(row => row.r_class):[],
        },
        "available": {
            "no": available_rooms?available_rooms.rowCount:0,
            "room_no": available_rooms?available_rooms.rows.map(row => row.r_no):[],
            "room_type": available_rooms?available_rooms.rows.map(row => row.r_class):[],
            "room_status": available_rooms?available_rooms.rows.map(row => row.r_status):[],
            "room_notes": available_rooms?available_rooms.rows.map(row => row.r_notes):[],
        },
        "unavailable": {
            "no": unavailable_rooms?unavailable_rooms.rowCount:0,
            "room_no": unavailable_rooms?unavailable_rooms.rows.map(row => row.r_no):[],
            "room_type": unavailable_rooms?unavailable_rooms.rows.map(row => row.r_class):[],
            "room_status": unavailable_rooms?unavailable_rooms.rows.map(row => row.r_status):[],
            "room_notes": unavailable_rooms?unavailable_rooms.rows.map(row => row.r_notes):[],
            "booking_ref": unavailable_rooms?unavailable_rooms.rows.map(row => row.b_ref):[],

        },
        "checked_out": {
            "no": checked_out?checked_out.rowCount:0,
            "room_no": checked_out?checked_out.rows.map(row => row.r_no):[],
            "room_type": checked_out?checked_out.rows.map(row => row.r_class):[],
            "room_status": checked_out?checked_out.rows.map(row => row.r_status):[],
            "room_notes": checked_out?checked_out.rows.map(row => row.r_notes):[],
        },
    };

    // Log Data
    res.send(data)
})


router.post("/reception/check_in", async (req,res) =>{
    const room_number = req.body["r_no"];
    const ref_number = req.body["r_ref"];

    const data = {
        "message": "",
        "status_code": null
    }
    
    try{
        await database_rooms.updateRoomAvaliability(room_number, "O", ref_number)
        await database_rooms.updateRoomAvaliability2(ref_number, "O", )

        data.message = "Successfully Updated Room Status"
        data.status_code = 200

    } catch (error){
        data.message = "Error Updating room status: " + error
        data.status_code = 402
    }
    res.send(data)
})

router.post("/reception/check_out", async (req,res) =>{
    const room_number = req.body["r_no"];
    const ref_number = req.body["r_ref"];

    const data = {
        "price": null,
        "message": "",
        "status_code": null
    }
    
    try{
        await database_rooms.updateRoomAvaliability(room_number, "C", ref_number)
        await database_rooms.updateRoomAvaliability2(ref_number, "C")

        let response = await database_rooms.getPrice(ref_number)
        data.price = response.rows[0].b_outstanding
        data.message = "Successfully Checked out"
        data.status_code = 200

    } catch (error){
        data.message = "Error Checking out: " + error
        data.status_code = 402
    }
    res.send(data)
})

router.post("/housekeeping/cleaned", async (req,res) =>{
    const room_number = req.body["r_no"];

    const data = {
        "message": "",
        "status_code": null
    }
    
    try{
        await database_rooms.updateRoomAvaliability(room_number, "A")
        data.message = "Successfully Updated Room Status"
        data.status_code = 200

    } catch (error){
        data.message = "Error Updating room status: " + error
        data.status_code = 402
    }
    res.send(data)
})

// router.post("/housekeeping/cleaning", async (req,res) =>{
//     const room_number = req.body["r_no"];

//     const data = {
//         "message": "",
//         "status_code": null
//     }
    
//     try{
//         await database_rooms.updateRoomAvaliability(room_number, "C")
//         data.message = "Successfully Updated Room Status"
//         data.status_code = 200

//     } catch (error){
//         data.message = "Error Updating room status: " + error
//         data.status_code = 402
//     }
//     res.send(data)
// })
module.exports = router;