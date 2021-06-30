import React from 'react';
import { useHistory } from 'react-router-dom';
import './menuButton.scss';

function MenuButton(props) {
  const { push } = useHistory();
  const handleClick = () => {
    push(`/${props.buttonRoute}`);
  };

  return (
    <button className="menu_buttons" onClick={handleClick}>
      {props.buttonName}
    </button>
  );
}

export default MenuButton;
