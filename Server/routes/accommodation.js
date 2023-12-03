const express = require('express');
const router = express.Router();
const database = require("../database_queries/rooms");

router.get("/", async (req, res) => {
    try {
        //  Insert into Data base
        let response = await database.getRatesForClass()
        response = response.rows

        const data = {
            "message": "load Successful",
            "data": response,
            "status_code": 200
        }
        res.send(data)
    } catch (error) {
        const data = {
            "message": "load Unsuccessful" + error,
            "data": null,
            "status_code": 404
        }
        res.send(data)
    }
})

module.exports = router;