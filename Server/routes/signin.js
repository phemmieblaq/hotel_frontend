const express = require('express');
const router = express.Router();
const database = require("../database");
const sharedValues = require('../shared_value');

router.post("/", async (req, res) => {
    const email = req.body["email"]
    const cPassword = req.body["password"]

    try {
        // get the customer number from the email given
        let response = await database.getCustomerNumber(email);
        if (response.rows.length == 0) {
            res.send("No Account associated with this email")
        }
        else {
            // get customer number
            const cNo = response.rows[0].c_no;

            // get password 
            response = await database.getPassword(cNo)
            const actualPassword = response.rows[0].c_password

            // compare passwords
            if (cPassword === actualPassword) {
                // set the log in status to be 'true'
                sharedValues.loggedIn = true;

                res.status(200).send("Sign in successful")

                // change the customer number that is used by all routes
                sharedValues.customerNumber = cNo;

            } 
            else {
                res.status(403).send("Bad Credentials")
            }
        }

    } catch {
        console.error()
    }
});

module.exports = router;