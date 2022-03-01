import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };
    fetchTasks();
  }, []);

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
      <main className="main">
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
            <Route
              path="/:taskTitle"
              exact
              element={<TaskDetails></TaskDetails>}
            ></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
