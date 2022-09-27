import logo from "./logo.svg";
import "./App.css";

// Importing the routes for the SPI structure
import { Routes, Route, Navigate } from "react-router-dom";

// Importing the pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import WorkPage from "./Pages/WorkPage";

// Importing the components
import NavBar from "./Components/Nav";
import MobileNav from "./Components/MobileNav";
import Footer from "./Components/Footer";

// Start of the app
function App() {
  return (
    <div className="App">
      {/* <-- -- //START OF THE APP CONTENT -- --> */}
      <main className="page-main-sec">
        <NavBar className="navbar" />
        <MobileNav className="mobile-navbar" />

        {/* <--  //Routes for the pages */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App;
