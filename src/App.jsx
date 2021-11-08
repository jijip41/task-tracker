import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Reset from './components/Reset';

function App() {
  const [tasks, setTasks] = React.useState([
    { id: 1, name: 'Coding', count: 0 },
    { id: 2, name: 'Reading', count: 0 },
    { id: 3, name: 'Yoga', count: 0 },
  ]);

  const handleIncrement = (task) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(task);
    newTasks[index].count++;
    setTasks(newTasks);
  };

  const handleDecrement = (task) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(task);
    const count = newTasks[index].count - 1;
    newTasks[index].count = count < 0 ? 0 : count;
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
  return (
    <>
      <Navbar />
      <Form />
      <Tasks
        tasks={tasks}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
      <Reset />
    </>
  );
}

export default App;
