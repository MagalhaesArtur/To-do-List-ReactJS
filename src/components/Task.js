import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  return (
    <div
      className="taskContainer"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div
        className="taskTitle"
        onClick={() => {
          handleTaskClick(task.id);
        }}
      >
        {task.title}
      </div>
      <div className="btnsContainer">
        <button
          onClick={() => {
            handleTaskDelete(task.id);
          }}
          className="removeBtn"
        >
          <CgClose />
        </button>
        <button onClick={() => {}} className="detailsBtn">
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
