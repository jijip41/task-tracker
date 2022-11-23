import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import TaskPresenter from './task_presenter';

const taskPresenter = new TaskPresenter([
  {
    id: 1,
    name: 'Hoovering',
    count: 0,
  },
  {
    id: 2,
    name: 'Watching TV',
    count: 0,
  },
  {
    id: 3,
    name: 'Learning React',
    count: 0,
  },
]);

const maxTasks = 10;

ReactDOM.render(
  <React.StrictMode>
    <App presenter={(taskPresenter, maxTasks)} />
  </React.StrictMode>,
  document.getElementById('root')
);
