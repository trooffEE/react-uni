import React from "react";
import "./App.css";
import TaskProps2 from "./TasksProps/TaskProps2";
import TaskProps3 from "./TasksProps/TaskProps3";
import TaskProps4 from "./TasksProps/TaskProps4";
import TaskProps5 from "./TasksProps/TaskProps5";
import TaskState2 from "./TasksState/TaskState2";

function App() {
  return (
    <div className="App">
      <h1>Задание по пропсам и компонентам</h1>
      <div className="task-props">
        <div>
          <h4> Задание 1</h4>
          <p>
            Если вы в целом видите это, значит всё и было сделано с npx
            create-react-app
          </p>
        </div>
        <div>
          <h4> Задание 2</h4>
          <TaskProps2 />
        </div>
        <div>
          <h4> Задание 3</h4>
          <TaskProps3 />
        </div>
        <div>
          <h4> Задание 4</h4>
          <TaskProps4 />
        </div>
        <div>
          <h4> Задание 5</h4>
          <TaskProps5 />
        </div>
      </div>
      <div className="task-state">
        <h1>Задание по состоянию</h1>
        <div>
          <h4> Задание 2</h4>
          <TaskState2 />
        </div>
        <div>
          <h4> Задание 5</h4>
          <TaskState5 />
        </div>
      </div>
    </div>
  );
}

export default App;
