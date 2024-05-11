import React from 'react';
import '../components/NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/MainPage">MainPage</NavLink></li>
        <li><NavLink to="/Squad">Squad</NavLink></li>
        <li><NavLink to="/ManagePlayer">Manage Player</NavLink></li>
  </ul>
    </nav>
  );
};

export default NavBar;