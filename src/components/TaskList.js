import { useContext } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../context/task";

function TaskList() {
  const {tasks} = useContext(TaskContext);
  return (
    <div className="task-list-div">
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
