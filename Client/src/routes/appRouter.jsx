import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageLayout from "../containers/layouts/mainPage";
import Home from "../pages/home";
import Accomodation from "../pages/Accomodation/accomIndex";
import Form from "../components/form/Form";

const AppRouter = () => {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/accomodation" element={<Accomodation/>} />
            <Route path="/book" element={<Form/>} />
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
  );
};

export default AppRouter;
