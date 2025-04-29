import React from 'react';

function Hero() {
  const heroStyles = {
    height: '100vh',
    background: 'linear-gradient(135deg, rgba(255, 61, 90, 0.8), rgba(255, 153, 51, 0.8)), url("https://images.unsplash.com/photo-1491744470747-0a38ab54ac39")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  };

  const overlayStyles = {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1
  };

  const containerStyles = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 20px'
  };

  const titleStyles = {
    fontSize: '4rem',
    fontWeight: '700',
    marginBottom: '20px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    animation: 'fadeIn 2s ease-out',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)'
  };

  const descriptionStyles = {
    fontSize: '1.5rem',
    marginBottom: '40px',
    opacity: '0.8',
    lineHeight: '1.6',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  };

  const buttonStyles = {
    padding: '14px 40px',
    fontSize: '1.2rem',
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
  };

  const buttonHoverStyles = {
    backgroundColor: '#d34f44',
    transform: 'scale(1.1)'
  };

  return (
    <div style={heroStyles}>
      <div style={overlayStyles}></div>
      <div style={containerStyles}>
        <h1 style={titleStyles}>Explore the World with Us</h1>
        <p style={descriptionStyles}>
          Discover breathtaking destinations, exciting adventures, and unforgettable experiences.
        </p>
        <button style={buttonStyles} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = '#ff6f61'}>
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default Hero;
