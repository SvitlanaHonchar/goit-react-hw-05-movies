import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
