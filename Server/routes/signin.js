const express = require('express');
const router = express.Router();
const database = require("../database_queries/customer");

router.post("/", async (req, res) => {
    const email = req.body["email"]
    const cPassword = req.body["password"]

    const data = {
        "message": "",
        "data":{
            "cNo": null
        },
        "logged_in": false,
        "status_code": null,
        "email": email
    }

    try {
        // get the customer number from the email given
        let response = await database.getCustomerNumber(email);
        if (response.rows.length == 0) {
            data.message = "No Account associated with this email"
            data.status_code = 404
        }
        else {
            // get customer number
            const cNo = response.rows[0].c_no;
            data.data.cNo = cNo;

            // get password 
            response = await database.getPassword(cNo)
            const actualPassword = response.rows[0].c_password

            // compare passwords
            if (cPassword === actualPassword) {
                // set the log in status to be 'true'
                data.logged_in = true
                data.message = "Sign in successful"
                data.status_code = 200
            } 
            else {
                data.message = "Bad Credentials"
                data.status_code = 404
            }
        }
        res.send(data)

    } catch (error){
        data.message = "Error: " + error
        data.status_code = 404
        res.send(data)
    }
});

module.exports = router;