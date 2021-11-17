import React from 'react';

const Reset = (props) => {
  return (
    <button className="square-btn" onClick={props.handleReset}>
      Reset
    </button>
  );
};

export default Reset;
