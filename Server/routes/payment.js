const express = require('express');
const router = express.Router();
const database = require("../database_queries/customer");
const database_rooms = require("../database_queries/rooms")

router.post('/price', async (req,res) =>{
    const ref = req.body["r_ref"]
    const data = {
        "price": null
    }

    try {
        let response = database_rooms.getPrice(ref)
        response = response.rows
        console.log(response.rows)
    } catch (error) {
        
    }
})

router.post('/add', async (req,res) =>{
    const ref = req.body["r_ref"]
    const data = {
        "price": null
    }

    try {
        let response = database_rooms(ref)
        response = response.rows
        console.log(response.rows)
    } catch (error) {
        
    }
})

router.post('/', async (req, res) => {
    // Get the username and password from the json 
    const userEmail = req.body["user_email"]
    const cardName = req.body["card_name"]
    const cardNumber = req.body["card_number"]
    const cardType = req.body["card_type"]
    const cardExp = req.body["exp"]

    const data = {
        "message": "",
        "data":{
            "name": null,
            "number": null,
            "type": null,
            "exp": null,
            "cNo": null
        },
        "status_code": null
    }
    try {
        //  Insert into Customer table
        let response = await database.getCustomerNumber(userEmail)
        const cNo = response.rows[0].c_no;
        data.data.cNo = cNo

        // insert into login table
        response = await database.addUserPaymentDetails(cNo)

        data.message = "Succesfully Updated Payment"
        data.status_code = 200
        data.data.exp = cardExp
        data.data.type = cardType
        data.data.number = cardNumber
        data.data.name = cardName

        res.send(data)
    } catch (error) {
        data.message = "Error: " + error
        data.status_code = 404
        res.send(data)
    }


})

module.exports = router;