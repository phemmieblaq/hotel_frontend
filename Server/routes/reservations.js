const express = require('express');
const router = express.Router();
const database = require("../database_queries/customer");
const databaseFood = require("../database_queries/food_drinks")

router.get("/", async (req, res) => {
const cNo = req.body["cNo"]

const data = {
    "reservation": {"data": [], "status_code": NaN, "message": ""},
    "food":{"data": [], "status_code": NaN, "message": ""},
    "drinks":{"data": [], "status_code": NaN, "message": ""},
    "cNo": cNo
}
    // Reservation
try {
    if (cNo != null) {
        let response = await database.getUsersReservations(cNo)
        // if there are no reservations
        if (response.rows.length == 0) {
            data.reservation.message = "No booking"
            data.status_code = 404
        }
        // Customers got reservations
        else {
            data.reservation.message = "Load Successful"
            data.reservation.data = response.rows
            data.reservation.status_code = 200
        }
    } else {
        data.reservation.message = "Not Looged in"
        data.reservation.status_code = 200
    }

} catch (error){
    data.reservation.message = "load Unsuccessful " + error,
    data.reservation.status_code = 404
}
    // Food & Drinks
try {
    response = await databaseFood.getFood()
    data.food.message = "Successfully got food"
    console.log(response.rows)
    data.food.data = response.rows
    data.food.status_code = 200

    response = await databaseFood.getDrinks()
    data.drinks.message = "Successfully got drinks"
    data.drinks.data = response.rows
    data.drinks.status_code = 200

} catch (error){
    data.food.message = "load Unsuccessful " + error,
    data.food.status_code = 404
    data.drinks.message = "load Unsuccessful " + error,
    data.drinks.status_code = 404
}

res.send(data)
});

module.exports = router;