import React from 'react';
import { Task } from '../interface/Task';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item">
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;