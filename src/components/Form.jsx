import React from 'react';

const Form = (props) => {
  const [taskName, setTaskName] = React.useState('');
  const [id, setId] = React.useState(1);
  const updateTasks = (task) => {
    props.addTasks(task);
  };
  return (
    <form>
      <input
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          setId(id + 1);
          const content = {
            id: { id },
            taskName: { taskName },
            count: 0,
          };

          updateTasks(content);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default Form;
