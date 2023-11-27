const express = require("express")
const app = express()
const database = require("./database")

app.use(express.json())


// Use the pool for a general query
async function selectAllFrom(table) {
    try {
      const result = await database.pool.query(`SELECT * FROM ${table}`);
      console.log(result.rows);
    } catch (error) {
      console.error('Error in database operation:', error);
    }
  }
  


app.post("/", (req,res) =>{
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

app.get("/", async (req,res)=>{
    // Set the search path
    await database.setSchema();

    // Choose the table to select ALL data from
    const table = "roombooking";

    // Select all data
    selectAllFrom(table);

    // Send response
    res.send("Request recieved:" + req.body)
})

app.get("/management", async (req,res)=>{
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

app.listen(3000)