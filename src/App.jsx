import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';

function App() {
  const [total, setTotal] = React.useState(
    document.querySelectorAll('li').length
  );

  return (
    <>
      <Navbar total={total} />
      <Tasks />
    </>
  );
}

export default App;
