import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import WelcomeLayout from "./layouts/WelcomeLayout";
import MainLayout from "./layouts/MainLayout";

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Activities from "./pages/Activities";
import Events from "./pages/Events";
import GetInvolved from "./pages/GetInvolved";
import Donation from "./pages/Donation";
import NewsMedia from "./pages/NewsMedia";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings"; // <-- Added Settings import

function App() {
  return (
    <Router>
      <Routes>
        {/* Welcome page with its own layout */}
        <Route
          path="/"
          element={
            <WelcomeLayout>
              <Welcome />
            </WelcomeLayout>
          }
        />

        {/* Signup and Login WITHOUT layout (no navbar/footer) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* All other pages with MainLayout */}
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/leadership"
          element={
            <MainLayout>
              <Leadership />
            </MainLayout>
          }
        />
        <Route
          path="/activities"
          element={
            <MainLayout>
              <Activities />
            </MainLayout>
          }
        />
        <Route
          path="/events"
          element={
            <MainLayout>
              <Events />
            </MainLayout>
          }
        />
        <Route
          path="/get-involved"
          element={
            <MainLayout>
              <GetInvolved />
            </MainLayout>
          }
        />
        <Route
          path="/donation"
          element={
            <MainLayout>
              <Donation />
            </MainLayout>
          }
        />
        <Route
          path="/news-media"
          element={
            <MainLayout>
              <NewsMedia />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* Settings page */}
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
