import React from 'react';

const Delete = (props) => {
  return (
    <button className="square-btn" onClick={props.handleDeleteAll}>
      Delete All
    </button>
  );
};

export default Delete;
