import React from 'react';
import TasksList from './TasksList';

// Container Component

export default function Tasks() {
  // State => Array
  const [tasks, setTasks] = React.useState([
    { name: 'Coding', count: 0 },
    { name: 'Reading', count: 0 },
    { name: 'Yoga', count: 0 },
  ]);

  return (
    <ul>
      {tasks.map((task) => (
        <TasksList task={task} />
      ))}
    </ul>
  );
}
