import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  };
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };
  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };
  return (
    <Router>
      <div className="container">
        <Header nome="Minhas Tarefas"></Header>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDelete={handleTaskDelete}
                />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
