import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Using actual travel destination images
const destinations = [
  {
    title: "Africa",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    location: "Serengeti National Park",
  },
  {
    title: "Europe",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Santorini, Greece",
  },
  {
    title: "Asia",
    image:
      "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    location: "Bali, Indonesia",
  },
  {
    title: "America",
    image:
      "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    location: "Grand Canyon, USA",
  },
];

function Destinations() {
  return (
    <div className="container py-5 position-relative">
      {/* Curved travel path background elements */}
      <div className="travel-path-container">
        <svg
          className="travel-path-svg"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            className="travel-path-line"
            d="M0,150 C200,50 400,250 600,100 C800,0 1000,200 1200,100"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10, 10"
          />
          <circle className="circle-marker" cx="150" cy="120" r="8" />
          <circle className="circle-marker" cx="400" cy="190" r="8" />
          <circle className="circle-marker" cx="650" cy="80" r="8" />
          <circle className="circle-marker" cx="900" cy="30" r="8" />
          <circle className="circle-marker" cx="1100" cy="140" r="8" />

          {/* Directional arrow */}
          <path
            className="travel-arrow"
            d="M1100,100 L1130,90 L1120,110 Z"
            fill="#FF8008"
          />
        </svg>

        {/* Airplane icon moving along the path */}
        <div className="airplane-icon">✈️</div>
      </div>

      {/* Clean, organized header section */}
      <div className="">
        <h2 className="custom-style-font-xd1">Top Destinations</h2>
        <div className="divider mx-auto mb-4"></div>
        <p className="custom-style-font-xd2" style={{ maxWidth: "700px" }}>
          Discover extraordinary places around the world and plan your next
          unforgettable journey
        </p>
      </div>

      {/* Clean card grid with consistent spacing */}
      <div className="row g-4">
        {destinations.map((dest, idx) => (
          <div className="col-md-6 col-lg-3" key={idx}>
            <div className="card h-100 border-0 destination-card">
              <div className="img-container">
                <img
                  src={dest.image || `/api/placeholder/400/320`}
                  className="card-img-top"
                  alt={dest.title}
                />
                <div className="overlay">
                  <button className="btn btn-sm explore-btn">Explore</button>
                </div>
                <div className="location-badge">
                  <span>{dest.location}</span>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{dest.title}</h5>
                <p className="card-text small text-muted">
                  Discover amazing experiences
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clean, centered action button */}
      <div className="text-center mt-5">
        <button className="btn primary-btn px-4 py-2">
          View All Destinations
        </button>
      </div>

      {/* Custom CSS - Clean orange theme with curved travel path */}
      <style>{`
        /* Container positioning for travel path */
        .container {
          overflow: hidden;
        }
        
        /* Curved travel path background */
        .travel-path-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: -1;
        }
        
        .travel-path-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .travel-path-line {
          stroke: #FF8008;
          stroke-opacity: 0.2;
          stroke-linecap: round;
          animation: drawLine 2s ease-out forwards;
        }
        
        @keyframes drawLine {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        .circle-marker {
          fill: #FFA03A;
          stroke: white;
          stroke-width: 2;
          opacity: 0;
          animation: fadeInMarkers 0.5s ease-out forwards;
        }
        
        .circle-marker:nth-child(2) { animation-delay: 0.4s; }
        .circle-marker:nth-child(3) { animation-delay: 0.8s; }
        .circle-marker:nth-child(4) { animation-delay: 1.2s; }
        .circle-marker:nth-child(5) { animation-delay: 1.6s; }
        .circle-marker:nth-child(6) { animation-delay: 2.0s; }
        
        @keyframes fadeInMarkers {
          0% { opacity: 0; transform: scale(0); }
          70% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .travel-arrow {
          opacity: 0;
          animation: fadeInArrow 0.5s ease-out 2s forwards;
        }
        
        @keyframes fadeInArrow {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        /* Airplane icon */
        .airplane-icon {
          position: absolute;
          font-size: 24px;
          opacity: 0;
          transform: rotate(20deg);
          filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));
          animation: flyPlane 8s linear 2.5s infinite;
        }
        
        @keyframes flyPlane {
          0% {
            left: 5%;
            top: 40%;
            opacity: 0;
            transform: rotate(10deg) scale(0.8);
          }
          10% {
            opacity: 1;
            transform: rotate(15deg) scale(1);
          }
          25% {
            left: 30%;
            top: 60%;
            transform: rotate(25deg);
          }
          50% {
            left: 60%;
            top: 35%;
            transform: rotate(15deg);
          }
          75% {
            left: 80%;
            top: 15%;
            transform: rotate(5deg);
          }
          90% {
            opacity: 1;
            transform: rotate(20deg) scale(1);
          }
          100% {
            left: 95%;
            top: 40%;
            opacity: 0;
            transform: rotate(25deg) scale(0.8);
          }
        }
        
        /* Modern text gradient with orange theme */
        .text-gradient {
          background: linear-gradient(to right, #FF8008, #FFA03A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 2.2rem;
          letter-spacing: -0.5px;
        }
        
        /* Clean divider for visual organization */
        .divider {
          height: 4px;
          width: 60px;
          background: linear-gradient(to right, #FF8008, #FFA03A);
          border-radius: 2px;
        }
        
        /* Enhanced card design */
        .destination-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
          transition: all 0.3s ease;
        }
        
        .destination-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 28px rgba(255, 128, 8, 0.15);
        }
        
        /* Improved image container with enhanced overlay */
        .img-container {
          position: relative;
          overflow: hidden;
          height: 220px;
        }
        
        .card-img-top {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          filter: saturate(1.2) contrast(1.1);
        }
        
        .destination-card:hover .card-img-top {
          transform: scale(1.1);
        }
        
        /* Enhanced overlay effect */
        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .destination-card:hover .overlay {
          opacity: 1;
        }
        
        /* Location badge */
        .location-badge {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background-color: rgba(255, 255, 255, 0.9);
          color: #333;
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
        
        /* Clean, modern buttons */
        .explore-btn {
          background-color: #FFA03A;
          color: white;
          border-radius: 50px;
          padding: 0.4rem 1.5rem;
          border: none;
          font-weight: 500;
          transform: translateY(20px);
          transition: all 0.3s ease;
          opacity: 0;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .destination-card:hover .explore-btn {
          transform: translateY(0);
          opacity: 1;
        }
        
        .explore-btn:hover {
          background-color: #FF8008;
          color: white;
        }
        
        /* Card content styling */
        .card-body {
          padding: 1.25rem;
        }
        
        .card-title {
          font-weight: 600;
          margin: 0.5rem 0;
          color: #333;
        }
        
        /* Main action button */
        .primary-btn {
          background: linear-gradient(to right, #FF8008, #FFA03A);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(255, 128, 8, 0.3);
          transition: all 0.3s ease;
        }
        
        .primary-btn:hover {
          box-shadow: 0 6px 20px rgba(255, 128, 8, 0.5);
          color: white;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default Destinations;
