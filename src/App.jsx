import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Reset from './components/Reset';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const handleIncrement = (task) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(task);
    newTasks[index].count++;

    setTasks(newTasks);
  };

  const handleDecrement = (task) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(task);
    const count = newTasks[index].count;
    newTasks[index].count = count < 1 ? count : count - 1;
    setTasks(newTasks);
  };

  const handleDelete = (task) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(task);

    newTasks.splice(index, 1);
    setTasks(newTasks);
    // const newTasks = tasks.filter((i) => i.id != task.id);
    // setTasks(newTasks)
  };

  const addTasks = (task) => {
    const addNewTask = [task, ...tasks];
    setTasks(addNewTask);
  };

  const handleReset = () => {
    setTasks([]);
  };
  return (
    <>
      <Navbar allCount={tasks.filter((i) => i.count > 0).length} />
      <Form addTasks={addTasks} />
      <Tasks
        tasks={tasks}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
        // onSubmit={handleTasksCount}
      />
      <Reset handleReset={handleReset} />
    </>
  );
}

export default App;
