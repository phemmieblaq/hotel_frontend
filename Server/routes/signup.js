const express = require('express');
const router = express.Router();
const database = require("../database_queries/customer");

router.post('/', async (req, res) => {
    // Get the username and password from the json 
    const name = req.body["name"]
    const email = req.body["email"]
    const phoneNo = req.body["phone_no"]
    const cPassword = req.body["password"]

    const data = {
        "message": "",
        "data":{
            "name": name,
            "email": email,
            "phone": phoneNo,
            "cNo": null
        },
        "status_code": null
    }
    try {
        //  Insert into Customer table
        let response = await database.addNewCustomer(name, email, phoneNo)
        const cNo = response.rows[0].c_no;
        data.data.cNo = cNo

        // insert into login table
        response = await database.addUserPassword(cNo, cPassword)

        data.message = "Succesfully Created Account"
        data.status_code = 200
        res.send(data)
    } catch (error) {
        data.message = "Error: " + error
        data.status_code = 404
        res.send(data)
    }


})

module.exports = router;