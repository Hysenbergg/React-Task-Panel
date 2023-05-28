import { createContext, useState } from "react";
import axios from "axios";

const TaskContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Yeni olusturulan bir task için obje yapısı belirledik ve her task'in id'sini ise random bir sayı atadık.
  const handleCreate = async (taskName, taskDesc) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      taskName,
      taskDesc,
    });
    console.log(response);
    const createTask = [...tasks, response.data];
    setTasks(createTask);
  };

  // local de çalışan json-server'ın get ile elemanların çağrılması.
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTasks(response.data);
  };

  // Silme işlemini props şeklinde yönlendirdiğimiz fonksiyonlardan id yöntemi ile beraber geçekleştiriyoruz.
  const handleDeleteTasksById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  // Update işlemi için oluştuduğum bir fonksiyon.
  const handleUpdateTasksById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      taskName: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, taskName: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Provider ile sarmallanan komponentlerin kullanabileceği değişken ve fonksiyonlar.
  const sharedValuesAndMethods = {
    tasks,
    handleCreate,
    fetchTasks,
    handleDeleteTasksById,
    handleUpdateTasksById
  }

  return <TaskContext.Provider value={sharedValuesAndMethods}>{children}</TaskContext.Provider>;
}

export { Provider };

export default TaskContext;
