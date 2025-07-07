import React from 'react';
import '../App.css';

const Banner = () => {
  return (
    <div className="banner-section d-flex align-items-center justify-content-center text-white"style={{width:"100vw", marginLeft:"calc(-50vw + 50%)"}}>
      <div className="text-center">
        <h1 className="fw-bold">ORDER ONLINE</h1>
        <p>Home / Order Online</p>
      </div>
    </div>
  );
};

export default Banner;
