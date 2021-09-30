import React from 'react';
import { NavLink } from 'react-router-dom';
import './menuButton.scss';

function MenuButton(props) {
  const handleClick =
    typeof props.handleClick !== 'undefined' ? props.handleClick : () => {};

  const hover = typeof props.hover !== 'undefined' ? props.hover : 'yesHover';

  return (
    <NavLink
      className={`menu_buttons ${hover}`}
      exact
      to={`${props.navTo}`}
      activeStyle={{ backgroundColor: '#e30b5d' }}
    >
      {props.buttonName}
    </NavLink>
  );
}

export default MenuButton;
