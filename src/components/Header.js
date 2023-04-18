import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => (
  <>
    <header className="main-head">
      <h1>Bookstore CMS</h1>
      <nav>
        <ul className="links">
          <li><NavLink to="/">Books</NavLink></li>
          <li><NavLink to="/categories">Categories</NavLink></li>
        </ul>
      </nav>
      <div className="profile">
        <span className="material-icons">person</span>
      </div>
    </header>
    <Outlet />
  </>
);

export default Header;
