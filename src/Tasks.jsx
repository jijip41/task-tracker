import React from 'react';
import TasksList from './TasksList';

export default function Tasks() {
  return (
    <form>
      <input placeholder="Task"></input>
      <button>Add</button>
      <div>
        <TasksList />
        <TasksList />
        <TasksList />
      </div>
    </form>
  );
}
