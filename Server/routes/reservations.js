const express = require('express');
const router = express.Router();
const database = require("../database_queries/customer");

router.get("/", async (req, res) => {
    const cNo = req.body["cNo"]

    try {
        const data = {
            "message": "",
            "data": null,
            "status_code": null,
            "cNo": cNo
        }

        if (cNo != null) {
            let response = await database.getUsersReservations(cNo)
            // if there are no reservations
            if (response.rows.length == 0) {
                data.message = "No booking"
                data.data = []
                data.status_code = 200
                res.send(data)
            }
            // Customers got reservations
            else {
                data.message = "Load Successful"
                data.data = response.rows
                data.status_code = 200
                res.send(data)
            }
        } else {
            data.message = "Not Looged in"
            data.data = []
            data.status_code = 200
            res.send(data);
        }
    } catch (error){
        const data = {
            "message": "load Unsuccessful " + error,
            "data": null,
            "status_code": 404
        }
        res.send(data)    }
});

module.exports = router;