import React from 'react';
import './referenceItem.scss';

function ReferenceItem(props) {
  return (
    <div className="referenceItem">
      <h3>{props.refName}</h3>
      <p>{props.refDetails}</p>
    </div>
  );
}

export default ReferenceItem;
