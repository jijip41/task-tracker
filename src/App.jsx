import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Reset from './components/Reset';
import Delete from './components/Delete';

function App({ presenter }) {
  const [tasks, setTasks] = React.useState(presenter.getTasks());

  const handleIncrement = (task) => {
    presenter.increment(task, setTasks);
  };

  const handleDecrement = (task) => {
    presenter.decrement(task, setTasks);
  };

  const handleDelete = (task) => {
    presenter.delete(task, setTasks);
  };

  const addTask = (name) => {
    presenter.add(name, setTasks);
  };

  const handleDeleteAll = () => {
    presenter.deleteAll(setTasks);
  };

  const handleReset = () => {
    presenter.reset(setTasks);
  };

  return (
    <>
      <Navbar allCount={tasks.filter((i) => i.count > 0).length} />
      <Form addTask={addTask} />
      <Tasks
        tasks={tasks}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
      <div className="control">
        <Reset handleReset={handleReset} />
        <Delete handleDeleteAll={handleDeleteAll} />
      </div>
    </>
  );
}

export default App;
