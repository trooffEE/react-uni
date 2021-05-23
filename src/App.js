import React from "react";
import "./App.css";
import TaskProps2 from "./TasksProps/TaskProps2";

function App() {
  return (
    <div className="App">
      <h1>Задание про пропсам и компонентам</h1>
      <div className="task-props">
        <div>
          <h4> Задание 2</h4>
          <TaskProps2 />
        </div>
      </div>
    </div>
  );
}

export default App;
