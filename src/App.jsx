import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Tasks from './Tasks';

function App() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Tasks />
      </div>
      <button>Reset</button>
    </div>
  );
}

export default App;
