const express = require('express');
const router = express.Router();
const database = require("../database");


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
        let response = await database.getCustomerNumber(email);
        const cNo = response.rows[0].c_no;

        // insert booking into booking table and get booking reference
        response = await database.makeBooking(cNo, bCost, bOutstanding, bNotes)
        const bRef = response.rows[0].b_ref;

        // randomly get a room number of the type specified
        response = await database.getRandomRoom(rClass)
        const roomNo = response.rows[0].r_no;

        // insert into roombooking table all info 
        response = await database.makeRoomBooking(roomNo, bRef, checkIn, checkOut);

        res.send(response)
    } catch (error) {
        console.error(error)
    }

});

module.exports = router;