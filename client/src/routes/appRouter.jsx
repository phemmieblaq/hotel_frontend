import React, { Suspense,} from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import LandingPageLayout from "../containers/layouts/mainPage";
import Home from "../pages/home";
import Experience from "../pages/experience";
import EventRooms from "../pages/event";
import Accomodation from "../pages/accomodation";
import SignUp from "../pages/authPages/signUp";
import SignIn from "../pages/authPages/signIn";
import ForgotPassword from "../pages/authPages/forgotPassword";
import DetailsPage from "../pages/accomodation/details/details";
import PaymentForm from "../containers/paymentForm";
import BookingForm from "../containers/bookingForm";
import Confirmation from "../containers/confirmation";
import Reservation from "../pages/reservation";
import AdminLayout from "../containers/layouts/adminLayout";
import Receptionist from "../pages/receptionist";
const AppRouter = () => {

return (


  <Suspense >
    <Router> 
      <Routes>
      <Route path="/" element={ <LandingPageLayout />}>
        
    
                  <Route index element={<Home />} />
                 

                  <Route path="experience" element={<Experience />} />
                  <Route path="events" element={<EventRooms />} />
                  <Route path="test" element={<Reservation />} />
                  <Route path="reservations" element={<Reservation />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="forgotpassword" element={<ForgotPassword />} />
                  <Route path="booking" element={<BookingForm />} />
                  <Route path="payment" element={<PaymentForm />} />
                  <Route path="booking-confirmation" element={<Confirmation />} />
      
                  <Route path="accomodation" element={<Outlet />}>
                <Route index element={<Accomodation />} />
                <Route path=":roomCode" element={<DetailsPage />} />
              </Route>
                  </Route>  
                  <Route path="/admin" element={ <AdminLayout />}  >
                  <Route index element={<Receptionist />} />


                   </Route>  
      </Routes>
       <Toaster
          position="top-right"
          toastOptions={{
            className: "",
            style: {
              margin: "10px",
              padding: "10px",
              display: "inline-flex",
              fontSize: "14px",
              zIndex: 999999,
            },
            duration: 4000,
            error: {
              style: {
                background: "#ff6363",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "red",
              },
            },
            loading: {
              style: {
                background: "#44cff2",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "#44cff2",
              },
            },
            success: {
              style: {
                background: "green",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "green",
              },
            },
          }}
        />
        </Router>
    </Suspense>
)
     
};


export default AppRouter;
