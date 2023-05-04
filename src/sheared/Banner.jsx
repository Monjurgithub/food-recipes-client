import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{
      backgroundImage: `url("https://i.ibb.co/18kKLmV/we.webp")`
    }}>
      <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there We are Hungery Partner</h1>
      <p className="mb-5">Good Food recipes with our Website. Most popular chef with us. Famouse and dalecious food check and take</p>
    </div>
  </div>

    </div>
  );
};

export default Banner;