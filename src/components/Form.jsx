import React from 'react';

const Form = (props) => {
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState(1);

  const updateTasks = (task) => {
    props.addTasks(task);
  };
  return (
    <form>
      <div className="form">
        <input
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
            const input = document.querySelector('input');
            if (name) updateTasks(content);

            input.value = '';
            setName(null);
            input.focus();
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
