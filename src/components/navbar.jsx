import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './Logo.svg';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className=" shadow-lg">
      <div className="w-4/5 m-auto flex items-center justify-between">
        <div className="logo w-3/6">
          <Logo className="w-full h-full sm:w-1/3" />
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="sm:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="contents sm:block sm:w-1/2">
          <ul
            className={cn(
              ' z-50 transition-all menu sm:flex flex-col sm:flex-row bg-gray-500 sm:bg-transparent absolute left-0 right-0 top-0 sm:static justify-evenly items-center h-full ',
              !isOpen
                ? 'transform -translate-y-full sm:transform-none '
                : 'transform-none '
            )}
          >
            <span
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute right-4 top-1 sm:hidden"
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <ListItem close={() => setIsOpen(false)} name={'Home'} link={'/'} />
            <ListItem
              close={() => setIsOpen(false)}
              name={'Blog'}
              link={'/blogs'}
            />
            <ListItem
              close={() => setIsOpen(false)}
              name={'About'}
              link={'/about'}
            />
          </ul>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ name, link, close }) => {
  return (
    <li onClick={() => close()}>
      <Link to={link}>{name}</Link>
    </li>
  );
};
