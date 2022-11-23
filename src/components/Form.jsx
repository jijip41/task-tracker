import React from 'react';

const Form = ({ addTask }) => {
  const inputRef = React.createRef();

  return (
    <form>
      <div className="form">
        <input ref={inputRef}></input>
        <button
          className="square-btn"
          onClick={(e) => {
            e.preventDefault();
            addTask(inputRef.current.value);
            inputRef.current.value = '';
            inputRef.current.focus();
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
