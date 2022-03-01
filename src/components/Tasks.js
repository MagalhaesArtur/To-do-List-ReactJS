import React from "react";
import Task from "./Task";

import "./Tasks.css";
const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
  return (
    <div className="tasksContainer">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleTaskClick={handleTaskClick}
            handleTaskDelete={handleTaskDelete}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
