import React, { Suspense,} from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import LandingPageLayout from "../containers/layouts/mainPage";
import Home from "../pages/home";
import Experience from "../pages/experience";
import EventRooms from "../pages/event";
const AppRouter = () => {

return (


  <Suspense >
    <Router> 
      <Routes>
      <Route path="/" element={ <LandingPageLayout />}>
                  <Route index element={<Home />} />
                  <Route path="experience" element={<Experience />} />
                  <Route path="events" element={<EventRooms />} />
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
