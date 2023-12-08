const express = require('express');
const router = express.Router();
const database = require("../database");

router.post('/', async (req, res) => {
    // Get the username and password from the json 
    const name = req.body["name"]
    const email = req.body["email"]
    const address = req.body["address"]
    const cardType = req.body["card_type"]
    const cardExp = req.body["card_exp"]
    const cardNo = req.body["card_no"]
    const phoneNo = req.body["phone_no"]
    const cPassword = req.body["password"]

    try {
        //  Insert into Customer table
        let response = await database.addNewCustomer(name, email, address, cardType, cardExp, cardNo, phoneNo)
        const cNo = response.rows[0].c_no;
        // insert into login table
        response = await database.addIntoLogin(cNo, cPassword)

        res.send(response)
    } catch (error) {
        console.error(error)
    }


})

module.exports = router;