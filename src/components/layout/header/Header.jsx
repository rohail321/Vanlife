import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className='header'>
        <div className='header__left'>
          <div className='header__left-logo'>
            <h1>#VANLIFE </h1>
          </div>
        </div>

        <div className='header__right'>
          <ul className='header__right-list'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/vans'>Vans</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
