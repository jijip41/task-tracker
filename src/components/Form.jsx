import React from 'react';

const Form = (props) => {
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState(1);
  const inputRef = React.createRef();

  const updateTasks = (task) => {
    props.addTasks(task);
  };
  return (
    <form>
      <div className="form">
        <input
          ref={inputRef}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button
          className="square-btn"
          onClick={(e) => {
            e.preventDefault();
            setId(id + 1);
            const content = {
              count: 0,
              id: id,
              name: name,
            };

            name && updateTasks(content);

            inputRef.current.value = '';
            setName(null);
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
