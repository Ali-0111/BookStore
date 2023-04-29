import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <>
    <header className="main-head">
      <div className="first-part-head">
        <h1 className="mont">Bookstore CMS</h1>
        <nav>
          <ul className="links">
            <li><NavLink className="link mont" to="/" activeClassName="active">Books</NavLink></li>
            <li>
              <NavLink className="link mont" to="/categories">Categories</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profile" />
    </header>
    <Outlet />
  </>
);

export default Header;
