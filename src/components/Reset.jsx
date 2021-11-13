import React from 'react';

const Reset = (props) => {
  return (
    <div className="reset">
      <button className="square-btn" onClick={props.handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
