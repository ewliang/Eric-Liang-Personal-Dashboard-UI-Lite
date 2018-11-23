import React from 'react';
// import logo from '../../assets/imgs/logo.png';
import './MainNav.scss';

const MainNav = () => {
  return (
    <div className = "main-nav">
      <img src = "" className = "main-logo" alt = "logo" />
      <nav>
        <ul>
          <li><a href = "#">Home</a></li>
          <li><a href = "#">Portfolio</a></li>
          <li><a href = "#">Settings</a></li>
          <li><a href = "#">Sign Out</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
