"use client";

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../assets/css/custom-addblog.css"; // Custom styles for AddBlog

function AddBlog() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card shadow-lg border-0 rounded-4 custom-card">
            <div className="card-body">
              <h1 className="card-title text-center text-gradient mb-4">
                Share Your Travel Stories with Us!
              </h1>
              <p className="card-text text-center mb-5">
                Join our travel community by adding your personal stories, tips, and travel experiences! Whether you're an explorer, a traveler, or a dreamer, your words can inspire and guide others on their journey. 
                <br />
                <strong>Everyone's voice matters here — it's your platform, your adventure!</strong>
              </p>
              <div className="d-flex justify-content-center">
                {/* Link to Guest page */}
                <Link to="/guest" className="btn custom-btn-outline mx-2">
                  Write as Guest
                </Link>
                {/* Link to Login page */}
                <Link to="/login" className="btn custom-btn-primary mx-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
