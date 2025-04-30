"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/custom-navbar.css";

// ✅ Accept setModalOpen as a prop
function Navbar({ setModalOpen }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-airplane-fill me-2 travel-icon"></i>
          TiTans<span id="blogcolor">Travel</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destinations">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            {/* ✅ Currency Converter Button opens modal */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <button
                className="btn btn-primary rounded-pill px-4 shadow-sm"
                onClick={() => setModalOpen(true)}
              >
                Currency Converter
              </button>
            </li>

            {/* Sign in stays the same */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link to="/login">
                <button className="btn btn-primary rounded-pill px-4 shadow-sm">
                  Sign in
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
