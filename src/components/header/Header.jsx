import React from 'react';
import './header.css'; 
import Main from '../../assets/main.png'

const Header = () => {

  return (
    <header className="header">
      <h1 className="header__heading">Hello,</h1>
      <h1 className="header__heading">Welcome to Talent Plus</h1>


      <img
        className="header__image"
        src={Main}
        alt="Talent Plus Logo"
      />

    </header>
  );

};

export default Header;

