import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{
      backgroundImage: `url("https://i.ibb.co/3SRC7kG/final.jpg")`
    }}>
      <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h4 className='animate-text bg-gradient-to-r from-gray-100 via-amber-300 to-orange-500 bg-clip-text text-transparent text-4xl font-black'>Hello there We are Hungery Partner</h4>
      <h4 className='animate-text bg-gradient-to-r from-teal-600 via-purple-600 to-orange-500 bg-clip-text text-transparent text-2xl font-black'>Good Food recipes with our Website. Most popular chef with us. Famouse and dalecious food check and take...</h4>
      
    </div>
  </div>

    </div>
  );
};

export default Banner;