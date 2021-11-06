import React from 'react';
import TasksList from './TasksList';

// Container Component

export default function Tasks() {
  // State => Array
  const [tasks, setTasks] = React.useState([
    { id: 1, name: 'Coding', count: 0 },
    { id: 2, name: 'Reading', count: 0 },
    { id: 3, name: 'Yoga', count: 0 },
  ]);

  return (
    <ul>
      {tasks.map((task) => (
        <TasksList key={task.id} task={task} />
      ))}
    </ul>
  );
}
