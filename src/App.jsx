import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Bootstrap and CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom-edit-bootstrap.css';
import './assets/css/custom-navbar.css';
import './assets/css/custom-footer.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AuthForm from './components/AuthForm';
import Destinations from './components/Destinations';
import CurrencyModal from './components/CurrencyModal'; // ✅ ADD THIS

function App() {
  const [modalOpen, setModalOpen] = useState(false); // ✅ ADD THIS

  return (
    <Router>
      <div className="App">
        <Navbar setModalOpen={setModalOpen} /> {/* ✅ PASS PROP */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>

        <Footer />
        {modalOpen && <CurrencyModal onClose={() => setModalOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;
