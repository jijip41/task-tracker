import React from 'react';

const Form = ({ addTask }) => {
  const inputRef = React.createRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTask(inputRef.current.value);
        inputRef.current.value = '';
        inputRef.current.focus();
      }}
    >
      <div className="form">
        <input ref={inputRef}></input>
        <button className="square-btn">Add</button>
      </div>
    </form>
  );
};

export default Form;
