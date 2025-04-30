import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import Bootstrap CSS and custom styles
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/custom-edit-bootstrap.css';
import './assets/css/custom-navbar.css';
import './assets/css/custom-footer.css';

import Navbar from './components/Navbar'; // Import Navbar component
import Hero from './components/Hero'; // Import Hero component
import Features from './components/Features'; // Import Features component
import Footer from './components/Footer'; // Import Footer component
import Home from './pages/Home'; // Assuming you created a Home page component for the landing page
import About from './pages/About'; // Your About page (this should match the route path)

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar will always be rendered */}
        
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route for Home */}
          <Route path="/about" element={<About />} /> {/* About page route */}
          {/* Add more routes for other pages as needed */}
        </Routes>

        <Footer /> {/* Footer section */}
      </div>
    </Router>
  );
}

export default App;
