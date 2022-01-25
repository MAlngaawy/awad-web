import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './Logo.svg';
import cn from 'classnames';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <header className=" shadow-lg">
      <div className="w-4/5 m-auto flex">
        <div className="logo w-3/6">
          <Logo className="w-full sm:w-1/2" />
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="sm:hidden"
        >
          menu
        </div>
        <div className="w-1/2">
          <ul
            className={cn(
              ' transition-all menu sm:flex flex-col sm:flex-row bg-gray-500 sm:bg-transparent absolute left-0 right-0 top-0 sm:static justify-evenly items-center h-full ',
              !isOpen ? 'transform -translate-y-full ' : 'transform-none '
            )}
          >
            <span
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute right-4 top-1 sm:hidden"
            >
              close
            </span>
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
        </div>
      </div>
    </header>
  );
};
