import TaskDetails from "./componenet/TaskDetails"
import TaskBoard from "./componenet/TaskBoard"
import TaskForm from "./componenet/TaskForm"
import { Task } from "./interface/Task";
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import React from "react";


function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const handleAddTask = (newTask: Task) => {
    newTask.id = Date.now();
    setTasks([...tasks, newTask]);
  }

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskBoard />} />
          <Route path="/task/:id" element={<TaskDetails tasks={tasks} onDelete={handleDeleteTask} />} />
          <Route path="/create-task" element={<TaskForm onSubmit={handleAddTask} />} />
          <Route path="/edit-task/:id" element={<TaskForm onSubmit={handleAddTask} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;