import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const active = {
  background: 'darkblue'
}

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={active}
      >Home</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={active}
      >Movies</NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={active}
      >Directors</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={active}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
