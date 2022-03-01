import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };
  return (
    <div className="addTaskContainer">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="addTask"
        type="text"
      />
      <div className="btnContainer">
        <Button onClick={handleAddTaskClick} children={<p>Adicionar</p>} />
      </div>
    </div>
  );
};

export default AddTask;
