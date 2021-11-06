import React from 'react';
import TasksList from './TasksList';

export default function Tasks() {
  const [tasks, setTasks] = React.useState([
    { name: 'Coding', count: 0 },
    { name: 'Reading', count: 0 },
    { name: 'Yoga', count: 0 },
  ]);

  function increase(state) {
    setTasks((state.count += 1));
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TasksList name={task.name} count={task.count} />
      ))}
    </ul>
  );
}
