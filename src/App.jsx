import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TasksList from './components/TasksList';

function App() {
  return (
    <>
      <Navbar />
      <TasksList />
    </>
  );
}

export default App;
