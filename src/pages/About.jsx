// About.jsx
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
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Front-End Developer</p>
              <p className="about-team-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia voluptate eos itaque maiores nobis aspernatur, optio harum, veritatis iste architecto perspiciatis vitae in, dolore obcaecati blanditiis! Doloremque, officiis veniam.</p>

              <a
                href="https://www.linkedin.com/in/johndoe"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Back-End Developer</p>
              <p className="about-team-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia voluptate eos itaque maiores nobis aspernatur, optio harum, veritatis iste architecto perspiciatis vitae in, dolore obcaecati blanditiis! Doloremque, officiis veniam.</p>
              <span id="linkedin-title">Linkedin</span>
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
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Mike Johnson</h5>
              <p className="card-text">API Modernization Specialist</p>
              <p className="about-team-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia voluptate eos itaque maiores nobis aspernatur, optio harum, veritatis iste architecto perspiciatis vitae in, dolore obcaecati blanditiis! Doloremque, officiis veniam.</p>

              <a
                href="https://www.linkedin.com/in/mikejohnson"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Alice Williams</h5>
              <p className="card-text">Project Manager</p>
              <p className="about-team-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia voluptate eos itaque maiores nobis aspernatur, optio harum, veritatis iste architecto perspiciatis vitae in, dolore obcaecati blanditiis! Doloremque, officiis veniam.</p>
              <a
                href="https://www.linkedin.com/in/alicewilliams"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn : Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
