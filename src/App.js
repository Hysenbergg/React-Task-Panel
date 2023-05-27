import { useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Yeni olusturulan bir task için obje yapısı belirledik ve her task'in id'sini ise random bir sayı atadık.
  const handleCreate = (taskName, taskDesc) => {
    const createTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        taskName,
        taskDesc,
      },
    ];
    setTasks(createTask);
  };

  // Silme işlemini props şeklinde yönlendirdiğimiz fonksiyonlardan id yöntemi ile beraber geçekleştiriyoruz. 
  const handleDeleteTasksById  = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  }

  // Update işlemi için oluştuduğum bir fonksiyon.
  const handleUpdateTasksById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        return {id, taskName: updatedTitle, taskDesc: updatedTaskDesc}
      }
      return task;
    })
    setTasks(updatedTasks);
  }
  return (
    <div className="App">
      <TaskCreate onCreate={handleCreate} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={handleDeleteTasksById} onUpdate={handleUpdateTasksById} />
    </div>
  );
}

export default App;
