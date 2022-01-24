import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './Logo.svg';

export const Navbar = () => {
  return (
    <header className="flex justify-between">
      <div className="logo w-3/6">
        <Logo className="custom-width" />
      </div>
      <ul className="navbar flex items-center justify-around w-3/6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};
