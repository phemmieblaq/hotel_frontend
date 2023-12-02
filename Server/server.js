const express = require("express")
const cors = require('cors');

const app = express()
const database = require("./database");
const { error } = require("console");

// Use the cors middleware to allow requests from all origins
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`server listening at port ${PORT}`) });

// Logged in credentials
let LOGGED_IN = false;
let CUSTOMER_NUMBER = null;


// ========================================== Home page - GET(Card Info) =============================================
app.get("/", async (req, res) => {
    // // Set the search path
    // await database.setSchema();

    try {
        //  Insert into Data base
        let response = await database.getRatesForClass()
        response = response.rows

        console.log(response);
        res.send(response)
    } catch (error) {
        console.error(error)
    }

})
// ========================================== Booking =========================================================
app.post("/booking", async (req, res) => {
    const email = req.body["email"]
    const bCost = req.body["cost"]
    const bOutstanding = req.body["outstanding"]
    const bNotes = req.body["notes"]
    const rClass = req.body["type"]
    const checkIn = req.body["check_in"]
    const checkOut = req.body["check_out"]


    try {
        // get the customer number from the email given
        let response = await database.getCustomerNumber(email);
        const cNo = response.rows[0].c_no;

        // insert booking into booking table and get booking reference
        response = await database.makeBooking(cNo, bCost, bOutstanding, bNotes)
        const bRef = response.rows[0].b_ref;

        // randomly get a room number of the type specified
        response = await database.getRandomRoom(rClass)
        const roomNo = response.rows[0].r_no;

        // insert into roombooking table all info 
        response = await database.makeRoomBooking(roomNo, bRef, checkIn, checkOut);

        // console.log(response);
        res.send(response)
    } catch (error) {
        console.error(error)
    }

})

// ========================================== Create account Route - Post ============================================
app.post('/signup', async (req, res) => {
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
        // console.log(response)
        const cNo = response.rows[0].c_no;
        // insert into login table
        response = await database.addIntoLogin(cNo, cPassword)

        console.log(response);
        res.send(response)
    } catch (error) {
        console.error(error)
    }


})

// ========================================== Accomodation page - GET(Card Info) =====================================
app.get("/accomodation", async (req, res) => {
    // // Set the search path
    // await database.setSchema();

    try {
        //  Insert into Data base
        let response = await database.getRatesForClass()
        response = response.rows

        console.log(response);
        res.send(response)
    } catch (error) {
        console.error(error)
    }

})
// ========================================== Managment - GET ========================================================
app.get("/management", async (req, res) => {
    // Set the search path
    await database.setSchema();

    // Date from
    const date = '2024-12-14';
    const interval = '7';

    // Select the number of rows from date to date + interval
    const res1 = await database.getRoomBookings(date, interval);

    // Select the number of available rooms
    const res2 = await database.getAllAvailableRooms();

    // Select the number of available rooms
    const res3 = await database.getAllUnavailableRooms();

    // Select the number of checked out rooms
    const res4 = await database.getAllCheckOutRooms();


    // Append the data to send to ejs file
    const data = {
        "bookings": {
            "no": res1.rowCount,
            "room_no": res1.rows.map(row => row.r_no),
            "room_type": res1.rows.map(row => row.r_class),
        },
        "available": {
            "no": res2.rowCount,
            "room_no": res2.rows.map(row => row.r_no),
            "room_type": res2.rows.map(row => row.r_class),
        },
        "unavailable": {
            "no": res3.rowCount,
            "room_no": res3.rows.map(row => row.r_no),
            "room_type": res3.rows.map(row => row.r_class),
        },
        "checked_out": {
            "no": res4.rowCount,
            "room_no": res4.rows.map(row => row.r_no),
            "room_type": res4.rows.map(row => row.r_class),
        },
    };

    // Log Data
    console.log(data)
    console.log(res2)
})
// ========================================== Home Page - POST =======================================================
app.post("/", (req, res) => {
    // Get the username and password from the json 
    const username = req.body["username"]
    const password = req.body["password"]

    // Log to see its the correct values
    console.log("username: " + username + " Password: " + password)

    // Insert statment
    const insert = `insert into accounts values('${username}', '${password}')`

    res.send("recieved")

    // Set schema path
})

// ========================================== Events - GET ===========================================================
app.get("/events", async (req, res) => {
    try {
        //  Insert into Data base
        let response = await database.getEventsInfo()
        response = response.rows

        console.log(response);
        res.send(response)
    } catch (error) {
        console.error(error)
    }
})

// ========================================== Log In - POST ==========================================================
app.post("/signin", async (req, res) => {
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
                LOGGED_IN = true;
                res.status(200).send("Sign in successful")

                // change the customer number that is used by all routes
                CUSTOMER_NUMBER = cNo;
            } 
            else {
                res.status(403).send("Bad Credentials")
            }
        }

    } catch {
        console.error(error)
    }
});

// ========================================== Resservation - Get ========================================================
app.get("/reservations", async (req, res) => {
    try {
        if (LOGGED_IN) {
            let response = await database.populateResservationPage(CUSTOMER_NUMBER)
            // if there are no reservations
            if (response.rows.length == 0) {
                res.send("No booking")
            }
            // Customers got reservations
            else {
                res.send(response.rows)
            }
        } else {
            res.send("Not Looged in");
        }
    } catch {
        console.error(error)
    }
});

// ========================================== Extra ========================================================

// // Use the pool for a general query
// async function selectAllFrom(table) {
//     try {
//         const result = await database.pool.query(`SELECT * FROM ${table}`);
//         console.log(result.rows);
//     } catch (error) {
//         console.error('Error in database operation:', error);
//     }
// }