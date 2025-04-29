"use client";

import { useState } from "react";
import "../assets/css/custom-navbar.css"; // Using your existing CSS file with enhancements

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        {/* Logo with travel icon */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <i className="bi bi-airplane-fill me-2 travel-icon"></i>
          TiTans<span id="blogcolor">Travel</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
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
              <a className="nav-link" href="/">
                Home
              </a>
              {/* Use <Link to="/" className="nav-link">Home</Link> if using React Router */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Destinations">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Contact">
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a href="/login">
                <button className="btn btn-outline-primary rounded-pill px-4">
                  Login
                </button>
              </a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a href="/register">
                <button className="btn btn-primary rounded-pill px-4 shadow-sm">
                  Register
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
