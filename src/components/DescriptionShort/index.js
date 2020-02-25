import React from 'react';
import './index.css';

function DescriptionShort({ data, btn }) {
  const {
    name, occupation,
  } = data;
  return (
    <div className="col-md-8 description">
      <div className="row text-left">
        <h1 className="col-md-4 offset-md-2 mb-4 name-short">{ name }</h1>
        <p className="col-md-8 offset-md-2 occupation-short">{ occupation }</p>
        <div className="col-md-8 offset-md-2 mt-4 pb-3">{btn}</div>
      </div>
    </div>
  );
}

export default DescriptionShort;
