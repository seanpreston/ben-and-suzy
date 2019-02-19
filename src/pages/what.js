import React from 'react';
// import Footer from '../components/Footer';

import heroText from '../media/images/hero-text.png';
import hero from '../media/images/hero.png';

const WhatPage = () => (
  <div>
    <img src={heroText} alt="Suzy and Ben"/>
    <div id="align-center">
      <p>are getting married</p>
    </div>
    <img src={hero} />
    <h2>20th JULY 2019</h2>
  </div>
);

export default WhatPage;
