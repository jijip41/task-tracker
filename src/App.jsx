import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Reset from './components/Reset';

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [allCount, setAllCount] = React.useState(0);
  // const [tasksCount, setTasksCount] = React.useState(0);

  const handleIncrement = (task) => {
    const newTasks = [...tasks];
    const p = task.count;
    if (p === 0) setAllCount(allCount + 1);
    newTasks[0].count++;
    setTasks(newTasks);
  };

  const handleDecrement = (task) => {
    const newTasks = [...tasks];
    const count = newTasks[0].count - 1;
    newTasks[0].count = count < 0 ? 0 : count;
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
      <Navbar allCount={allCount} />
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
