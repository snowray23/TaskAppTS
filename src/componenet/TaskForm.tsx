import React, { useState, useEffect } from 'react';
import { Task } from '../interface/Task';

interface TaskFormProps {
  task?: Task; 
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit }) => {
  const initialFormData: Task = task ? { ...task } : { id: 0, title: '', description: '' };
  const [formData, setFormData] = useState<Task>(initialFormData);

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(task ? { ...task } : { id: 0, title: '', description: '' }); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" className="form-control" name="title" value={formData.title} onChange={handleInputChange} required />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea className="form-control" name="description" value={formData.description} onChange={handleInputChange} required />
      </div>
      <button type="submit" className="btn btn-primary">{task ? 'Update' : 'Create'}</button>
    </form>
  );
}

export default TaskForm;