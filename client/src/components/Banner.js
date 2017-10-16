import React from 'react';
import BannerImg from '../assets/banner-rad-dope.png';

const Banner = () => {
  return (
    <section id="banner">
      <img src={BannerImg} alt="Rad Banner"/>
      <div id="banner-content">
        <h1>Dope Shirts</h1>
        <h2>...for Dope People</h2>
      </div>
    </section>
  );
};

export default Banner;
