import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Task } from '../interface/Task';

const TaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container mt-4">
      <h2>Task Board</h2>
      <TaskForm onSubmit={handleAddTask} />
      <hr />
      <h3>Tasks</h3>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskBoard;