import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskItem({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteTask = () => {
    onDelete(task.id);
  };

  const handleEditTask = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  }
  return (
    <div className="task-item-div">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-item-title">Task Name</h3>
          <p className="task-item-desc">{task.taskName}</p>
          <h3 className="task-item-title">Task Description</h3>
          <p className="task-item-desc">{task.taskDesc}</p>
          <div>
            <button className="task-delete-button" onClick={handleDeleteTask}>
              Sil
            </button>
            <button className="task-edit-button" onClick={handleEditTask}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
