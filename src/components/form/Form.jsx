import React, { memo } from 'react';

const Form = memo(({ addTask }) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const task = inputRef.current.value;
    task && addTask(inputRef.current.value);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <div className="form">
        <input ref={inputRef} type="text" placeholder="Task" />
        <button className="square-btn">Add</button>
      </div>
    </form>
  );
});

export default Form;
