import React from "react";
import "../assets/css/About.css"; // Custom CSS file
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="container py-5 about-container">
      <h1 className="text-center mb-4 title-heading">About Us</h1>
      <p className="lead text-center mb-5 subtitle">
        We are a travel company that helps you explore the world. Our team at
        GeeksInstitut is dedicated to delivering an exceptional experience,
        working together on this project.
      </p>

      <h2 className="text-center mb-4 team-title">Meet the Team</h2>

      {/* Charlie Brown at the top */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-12">
          <div className="card team-card">
            <div className="card-body text-center">
              <h5 className="card-title team-name">Charlie Brown</h5>
              <p className="card-text role">Project Manager</p>
              <p className="about-team-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia voluptate eos itaque maiores nobis
                aspernatur.
              </p>
              <span>LinkedIn</span>
              <br />
              <a
                href="https://www.linkedin.com/in/charliebrown"
                className="btn btn-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Username
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* The 4 other team members at the bottom */}
      <div className="row justify-content-center">
        {/* First Team Member */}
        <div className="col-md-3 mb-4">
          <div className="card team-card">
            <div className="card-body text-center">
              <h5 className="card-title team-name">Jane Smith</h5>
              <p className="card-text role">Back-End Developer</p>
              <p className="about-team-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia voluptate eos itaque maiores nobis
                aspernatur.
              </p>
              <span>LinkedIn</span>
              <br />
              <a
                href="https://www.linkedin.com/in/janesmith"
                className="btn btn-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Username
              </a>
            </div>
          </div>
        </div>

        {/* Second Team Member */}
        <div className="col-md-3 mb-4">
          <div className="card team-card">
            <div className="card-body text-center">
              <h5 className="card-title team-name">Alice Johnson</h5>
              <p className="card-text role">Front-End Developer</p>
              <p className="about-team-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia voluptate eos itaque maiores nobis
                aspernatur.
              </p>
              <span>LinkedIn</span>
              <br />
              <a
                href="https://www.linkedin.com/in/alicejohnson"
                className="btn btn-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Username
              </a>
            </div>
          </div>
        </div>

        {/* Third Team Member */}
        <div className="col-md-3 mb-4">
          <div className="card team-card">
            <div className="card-body text-center">
              <h5 className="card-title team-name">Bob Lee</h5>
              <p className="card-text role">UI/UX Designer</p>
              <p className="about-team-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia voluptate eos itaque maiores nobis
                aspernatur.
              </p>
              <span>LinkedIn</span>
              <br />
              <a
                href="https://www.linkedin.com/in/boblee"
                className="btn btn-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Username
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Team Member */}
        <div className="col-md-3 mb-4">
          <div className="card team-card">
            <div className="card-body text-center">
              <h5 className="card-title team-name">Master John Doe</h5>
              <p className="card-text role">Lead Developer</p>
              <p className="about-team-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae officia voluptate eos itaque maiores nobis
                aspernatur.
              </p>
              <span>LinkedIn</span>
              <br />
              <a
                href="https://www.linkedin.com/in/johndoe"
                className="btn btn-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Username
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
