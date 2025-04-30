import React from 'react';

import Hero from '../components/Hero';  // Adjust path if needed
import Features from '../components/Features';  // Adjust path if needed
import AddBlog from '../components/Addblog';


function Home() {
  return (
    <div>
      <Hero />  {/* Render the Hero component */}
      <Features />  {/* Render the Features component */}
      <AddBlog />  {/* Render the AddBlog component */}
      {/* You can add more components or sections here as needed */}
    </div>
  );
}

export default Home;
