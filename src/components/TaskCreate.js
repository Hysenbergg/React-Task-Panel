import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [taskName, setTaskName] = useState(task ? task.taskName : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
      onUpdate(task.id, taskName, taskDesc);
    }else {
      onCreate(taskName, taskDesc);
    }
    setTaskName("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update-div">
          <h3 className="task-create-title">Task Ekleyebilirsiniz!</h3>
          <form className="task-create-form">
            <label className="task-create-label">Task Adınız Düzenleyiniz:</label>
            <input
              className="task-create-input"
              value={taskName}
              onChange={handleTaskNameChange}
            />
            <label className="task-create-label">Task Açıklamasını Düzenleyiniz:</label>
            <textarea
              className="task-create-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskDescChange}
            />
            <button className="task-create-button task-update-button" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create-div">
          <label className="task-create-title">Task Ekleyebilirsiniz.</label>
          <form className="task-create-form">
            <label className="task-create-label">Task Adını Giriniz:</label>
            <input
              className="task-create-input"
              value={taskName}
              onChange={handleTaskNameChange}
            />
            <label className="task-create-label">Task Açıklamasını Giriniz:</label>
            <textarea
              className="task-create-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskDescChange}
            />
            <button className="task-create-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
