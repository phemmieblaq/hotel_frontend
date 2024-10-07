const express = require('express');
const router = express.Router();
const database = require("../database_queries/events");


router.get("/", async (req, res) => {
    const data = {
        "message": "",
        "data": null,
        "status_code": 200
    }
    try {
        //  Insert into Data base
        let response = await database.getEventsInfo()
        data.message = "load Successful"
        console.log(response)
        data.data = response.rows

        res.send(data)
    } catch (error) {
        data.message = "load Unsuccessful"   
        data.status_code = 404
        res.send(data)
    }
})

module.exports = router;