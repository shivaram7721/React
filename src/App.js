import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef(null);

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);

  const handleAddTask = (event) => {
    const taskInput = todoInputRef.current.value;
    if (taskInput)
      setTodos([
        ...todos,
        { id: Date.now(), task: taskInput, completed: false },
      ]);
    todoInputRef.current.value = "";
  };

  const handleDeleteTask = (taskId) => {
    setTodos(todos.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTodos(
      todos.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const countUncompletedTasks = () =>
    todos.filter((task) => !task.completed).length;

  return (
    <div className="App">
      <div className="Container">
        <h1>Pending tasks({countUncompletedTasks()})</h1>
        <ul className="ulist">
          {todos.map((task, id) => (
            <li className={task.completed ? "strike" : "tasks"} key={id}>
              <div
                style={{
                  fontSize: 15,
                  overflowWrap: "break-word",
                  inlineSize: 150,
                }}
              >
                {task.task}
              </div>
              <div className="divBtn">
                <button
                  className="complete"
                  onClick={() => handleCompleteTask(task.id)}
                >
                  Complete
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        <input type="text" ref={todoInputRef} placeholder="Add a new task" />
        <button className="addTask" type="submit" onClick={handleAddTask}>
          Add task
        </button>
      </div>
    </div>
  );
}

export default App;
