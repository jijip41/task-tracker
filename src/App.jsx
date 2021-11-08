import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Reset from './components/Reset';

function App() {
  return (
    <>
      <Navbar />
      <Form />
      <Tasks />
      <Reset />
    </>
  );
}

export default App;
