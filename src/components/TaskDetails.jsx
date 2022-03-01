import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Button.css";
import "./TaskDetails.css";
const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handeBackButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="backButton">
        <Button onClick={handeBackButtonClick}>Voltar</Button>
      </div>
      <div className="taskDetailsContainer">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          repudiandae corporis ut omnis suscipit odit!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
