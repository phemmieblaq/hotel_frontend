const express = require("express")
const cors = require('cors');

const app = express()

// Use the cors middleware to allow requests from all origins
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`server listening at port ${PORT}`) });


// Import route files
const homeRoute = require('./routes/home');
const bookingRoute = require('./routes/booking');
const signupRoute = require('./routes/signup');
const accommodationRoute = require('./routes/accommodation');
const managementRoute = require('./routes/management');
const signinRoute = require('./routes/signin');
const reservationsRoute = require('./routes/reservations');
const eventsRoute = require('./routes/events');
const paymentRoute = require('./routes/payment');



// Use route files
app.use('/', homeRoute);
app.use('/booking', bookingRoute);
app.use('/signup', signupRoute);
app.use('/accommodation', accommodationRoute);
app.use('/management', managementRoute);
app.use('/signin', signinRoute);
app.use('/reservations', reservationsRoute);
app.use('/events', eventsRoute);
app.use('/payment', paymentRoute);




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