
import { useParams, Link } from 'react-router-dom';
import { Task } from '../interface/Task';

interface TaskDetailsProps {
    tasks: Task[];
    onDelete: (taskId: number) => void;
  }
  
  const TaskDetails: React.FC<TaskDetailsProps> = ({ tasks, onDelete }) => {
    const { id } = useParams<{ id?: string }>();
    const taskId = id ? parseInt(id, 10) : undefined; 
  
    
    const task = taskId ? tasks.find(task => task.id === taskId) : undefined;
  
    if (!task) return <div>Task not found.</div>;
  
    const handleDelete = () => {
      onDelete(task.id);
    }
  
    return (
      <div className="container mt-4">
        <h2>Task Details</h2>
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <Link to={`/edit-task/${task.id}`} className="btn btn-primary mr-2">Edit</Link>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
  
  export default TaskDetails;