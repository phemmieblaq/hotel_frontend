const express = require('express');
const router = express.Router();
const database = require("../database");
const sharedValues = require('../shared_value');


router.get("/", async (req, res) => {
    try {
        if (sharedValues.loggedIn) {
            let response = await database.populateResservationPage(sharedValues.customerNumber)
            // if there are no reservations
            if (response.rows.length == 0) {
                res.send("No booking")
            }
            // Customers got reservations
            else {
                res.send(response.rows)
            }
        } else {
            res.send("Not Looged in");
        }
    } catch {
        console.error()
    }
});

module.exports = router;