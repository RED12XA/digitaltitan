import React, { useState } from "react";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const heroStyles = {
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    overflow: "hidden",
  };

  const videoStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  };

  const containerStyles = {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    margin: "0 20px",
  };

  const titleStyles = {
    fontSize: "3.1rem",
    fontWeight: "600",
    marginBottom: "20px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    animation: "fadeIn 2s ease-out",
    textShadow: "3px 3px 6px rgba(255, 255, 255, 0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  };



  const descriptionStyles = {
    fontSize: "1.5rem",
    marginBottom: "40px",
    opacity: "0.8",
    lineHeight: "1.6",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const buttonStyles = {
    padding: "14px 40px",
    fontSize: "1.2rem",
    backgroundColor: isHovered ? "#ffffff" : "transparent",
    color: isHovered ? "#ff6f61" : "#ffffff",
    border: "2px solid #ffffff",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  return (
    <div style={heroStyles}>
      <video
        style={videoStyles}
        autoPlay
        loop
        muted
        playsInline
        src="/media/bg1.mp4"
      ></video>
      <div style={overlayStyles}></div>
      <div style={containerStyles}>
        <h1 style={titleStyles}>
          Explore ◆ Dream ◆ Discover
        </h1>
        <p style={descriptionStyles}>
          Discover breathtaking destinations, exciting adventures, and unforgettable experiences.
        </p>
        <button
          style={buttonStyles}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default Hero;
