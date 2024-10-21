import React from 'react';

import { images } from '../../constants'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      < SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Savor the perfect harmony of tradition and innovation at Géricht, where each dish is crafted with the world’s finest ingredients. Every meal is more than a moment—it’s an elegant journey of taste and refinement.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
