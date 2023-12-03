const express = require('express');
const router = express.Router();
const database = require("../database");

router.get("/", async (req, res) => {
    try {
        //  Insert into Data base
        let response = await database.getRatesForClass()
        response = response.rows

        res.send(response)
    } catch (error) {
        console.error(error)
    }

})

module.exports = router;