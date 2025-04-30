import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="lead text-center mb-5">
        We are a travel company that helps you explore the world. Our team at
        GeeksInstitut is dedicated to delivering an exceptional experience,
        working together on this project.
      </p>

      <h2 className="text-center mb-4">Meet the Team</h2>

      {/* Charlie Brown at the top */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Charlie Brown</h5>
              <p className="card-text">Project Manager</p>
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
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Back-End Developer</p>
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
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Alice Johnson</h5>
              <p className="card-text">Front-End Developer</p>
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
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Bob Lee</h5>
              <p className="card-text">UI/UX Designer</p>
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
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Master John Doe</h5>
              <p className="card-text">Lead Developer</p>
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
