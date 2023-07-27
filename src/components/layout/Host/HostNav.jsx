import React from "react";
import { Link } from "react-router-dom";

import "./HostNav.css";

function HostNav() {
  return (
    <div className='nav'>
      <nav className='nav__dashboard'>
        <Link to='/host' className='nav__dashboard-link'>
          Dashboard
        </Link>
      </nav>
      <nav className='nav__income'>
        <Link to='/host/income' className='nav__income-link'>
          Income
        </Link>
      </nav>
      <nav className='nav__vans'>
        <Link to='/host/vans' className='nav__vans-link'>
          Vans
        </Link>
      </nav>
      <nav className='nav__reviews'>
        <Link to='/host/reviews' className='nav__reviews-link'>
          Reviews
        </Link>
      </nav>
    </div>
  );
}

export default HostNav;
