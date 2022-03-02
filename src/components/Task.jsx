import React from "react";
import { useNavigate } from "react-router-dom";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleTaskClick, handleTaskDelete }) => {
  let navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  };
  return (
    <div
      className="taskContainer"
      style={
        task.completed
          ? {
              borderLeft: "6px solid chartreuse",
              textDecoration: "line-through",
            }
          : {}
      }
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

        <button onClick={handleTaskDetailsClick} className="detailsBtn">
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
