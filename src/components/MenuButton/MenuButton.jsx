import React from 'react';
import { NavLink } from 'react-router-dom';
import './menuButton.scss';

function MenuButton(props) {
  return (
    <NavLink
      className={`menu_buttons`}
      exact
      to={`${props.navTo}`}
      activeStyle={{ backgroundColor: '#e30b5d' }}
    >
      {props.buttonName}
    </NavLink>
  );
}

export default MenuButton;
