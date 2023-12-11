const express = require('express');
const router = express.Router();
const database_booking = require("../database_queries/booking");
const database_user = require("../database_queries/customer");
const database_rooms = require("../database_queries/rooms");



router.post("/", async (req, res) => {
    const email = req.body["email"]
    const bCost = req.body["cost"]
    const bOutstanding = req.body["outstanding"]
    const bNotes = req.body["notes"]
    const rClass = req.body["type"]
    const checkIn = req.body["check_in"]
    const checkOut = req.body["check_out"]

    try {
        // get the customer number from the email given
        let response = await database_user.getCustomerNumber(email);
        const cNo = response.rows[0].c_no;

        // insert booking into booking table and get booking reference
        response = await database_booking.makeBooking(cNo, bCost, bOutstanding, bNotes)
        const bRef = response.rows[0].b_ref;

        // randomly get a room number of the type specified
        response = await database_rooms.getRandomRoom(rClass)
        const roomNo = response.rows[0].r_no;

        // insert into roombooking table all info 
        response = await database_booking.makeRoomBooking(roomNo, bRef, checkIn, checkOut);

        const data = {
            "message": "Booking Successfull!!",
            "data": {
                "customer_number": cNo,
                "booking_ref": bRef,
                "assigned_room": roomNo,
                "email": email,
                "cost": bCost,
                "outstanding": bOutstanding,
                "notes": bNotes,
                "class": rClass,
                "check_in": checkIn,
                "check_out": checkOut
            },
            "status_code": 200
        };

        res.send(data)
    } catch (error) {
        const data = {
            "message": "Room Type fully Booked:" + error,
            "data": {
                "customer_number": null,
                "booking_ref": null,
                "assigned_room": null,
                "email": email,
                "cost": bCost,
                "outstanding": bOutstanding,
                "notes": bNotes,
                "class": rClass,
                "check_in": checkIn,
                "check_out": checkOut
            },
            "status_code": 403
        };
        res.send(data)
    }

});

module.exports = router;