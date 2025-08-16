import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import WelcomeLayout from "./layouts/WelcomeLayout";
import MainLayout from "./layouts/MainLayout";

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import RequireAuth from "./components/RequireAuth";
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
import Account from "./pages/Account";
        <Route
          path="/account"
          element={
            <RequireAuth>
              <MainLayout>
                <Account />
              </MainLayout>
            </RequireAuth>
          }
        />

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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <MainLayout>
                <About />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/leadership"
          element={
            <RequireAuth>
              <MainLayout>
                <Leadership />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/activities"
          element={
            <RequireAuth>
              <MainLayout>
                <Activities />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/events"
          element={
            <RequireAuth>
              <MainLayout>
                <Events />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/get-involved"
          element={
            <RequireAuth>
              <MainLayout>
                <GetInvolved />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/donation"
          element={
            <RequireAuth>
              <MainLayout>
                <Donation />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/news-media"
          element={
            <RequireAuth>
              <MainLayout>
                <NewsMedia />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/contact"
          element={
            <RequireAuth>
              <MainLayout>
                <Contact />
              </MainLayout>
            </RequireAuth>
          }
        />

        {/* Signup and Login WITHOUT layout (no navbar/footer) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* All other pages with MainLayout */}
        <Route
          path="/home"
          element={
            <RequireAuth>
              <MainLayout>
                <Home />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <MainLayout>
                <About />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/leadership"
          element={
            <RequireAuth>
              <MainLayout>
                <Leadership />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/activities"
          element={
            <RequireAuth>
              <MainLayout>
                <Activities />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/events"
          element={
            <RequireAuth>
              <MainLayout>
                <Events />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/get-involved"
          element={
            <RequireAuth>
              <MainLayout>
                <GetInvolved />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/donation"
          element={
            <RequireAuth>
              <MainLayout>
                <Donation />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/news-media"
          element={
            <RequireAuth>
              <MainLayout>
                <NewsMedia />
              </MainLayout>
            </RequireAuth>
          }
        />
        <Route
          path="/contact"
          element={
            <RequireAuth>
              <MainLayout>
                <Contact />
              </MainLayout>
            </RequireAuth>
          }
        />

        {/* Settings page */}
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <MainLayout>
                <Settings />
              </MainLayout>
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
