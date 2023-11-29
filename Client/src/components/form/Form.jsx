import React from 'react';
import './form.css';

const Form = () => {
    // Send form info on submit
    const handleSubmit = async (event) => {
        // Dtops form from refreshign after reload or submit
        event.preventDefault();

        // Get the data from the form
        const formData = new FormData(event.target);
        const value = Object.fromEntries(formData.entries());

        // turn data entered by user into json format
        const newData = JSON.stringify(value);

        console.log(newData);

        // const formDataObject = {};
        // formData.forEach((value, key) => {
        //     formDataObject[key] = value;
        // });

        // Send the form data to the JSONPlaceholder endpoint
        const response = await fetch('/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: newData,
        });

        // Check if the request was successful (status code 200-299)
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Form submitted successfully. Response:', jsonResponse);
        } else {
            console.error('Form submission failed. Status:', response.status);
        }
    };

    return (
        <div className='formBigDiv'>
            <form onSubmit={handleSubmit} className="form">
                <div className='formHeading'>
                    <h2>Booking</h2>
                    <p>Please provide the required information to book your accomodation</p>
                </div>

                <div className="elem-group">
                    <label htmlFor="name">First </label>
                    <input type="text" id="name" name="name" placeholder='name' />
                </div>

                <div className="elem-group">
                    <label htmlFor="name">Last</label>
                    <input type="text" id="name" name="name" placeholder='name' />
                </div>

                <div className="elem-group">
                    <label htmlFor="email">Your E-mail</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="elem-group">
                    <label htmlFor="phone">Your Phone</label>
                    {/* pattern='(\d{3})-?\s?(\d{3})-?\s?(\d{4})' */}
                    <input type="tel" id="phone" name="phone" />
                </div>
                {/* <hr> */}
                <div id='formGroup' className="elem-group">
                    <div>
                        <label htmlFor="adult">Adults</label>
                        <input type="number" id="adult" name="adult" min="1" />
                    </div>
                    <div>
                        <label htmlFor="child">Children</label>
                        <input type="number" id="child" name="child" min="0" />
                    </div>
                </div>
                <div className="elem-group inlined">
                    <label htmlFor="checkin">Check-in Date</label>
                    <input type="date" id="checkin-date" name="checkin" />
                </div>
                <div className="elem-group inlined">
                    <label htmlFor="checkout">Check-out Date</label>
                    <input type="date" id="checkout-date" name="checkout" />
                </div>
                <div className="elem-group">
                    <label htmlFor="room-selection">Type</label>
                    <select id="room-selection" name="room-selection" >
                        <option value="">-- Choose a Room from the List --</option>
                        <option value="connecting">Superior Double</option>
                        <option value="adjoining">Superior Twin</option>
                        <option value="adjacent">Standard Double</option>
                        <option value="adjacent">Standard Twin</option>

                    </select>
                </div>
                {/* </hr> */}
                <div className="elem-group">
                    <label htmlFor="message"></label>
                    <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." ></textarea>
                </div>
                <button type="submit">Book</button>
            </form>
        </div>
    );
};

export default Form;
