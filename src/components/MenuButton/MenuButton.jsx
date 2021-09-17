import React from 'react';
/* import { useHistory } from 'react-router-dom';
 */ import './menuButton.scss';

function MenuButton(props) {
  const handleClick =
    typeof props.handleClick !== 'undefined' ? props.handleClick : () => {};

  const hover = typeof props.hover !== 'undefined' ? props.hover : 'yesHover';

  return (
    <button className={`menu_buttons ${hover}`} onClick={() => handleClick()}>
      {props.buttonName}
    </button>
  );
}

export default MenuButton;
