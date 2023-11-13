import React from 'react';
import './button.scss';

function Button({ button, onClick, btnText }) {
  return (
    <button
      className={button === 'secondary' ? 'button secondary' : 'button'}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
