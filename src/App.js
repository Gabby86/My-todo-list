import React, { useState } from 'react';
import './App.css';
import Tasks from './Components/Tasks';
import Description from './Components/Description';
import AddTaskButton from './Components/AddTaskButton';
import DeleteTask from './Components/DeleteTask';
import ToDoList from './Components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleTaskInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleDescriptionInputChange = (e) => {
    setDescriptionInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        task: taskInput,
        description: descriptionInput,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskInput('');
      setDescriptionInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Tasks
        taskInput={taskInput}
        handleTaskInputChange={handleTaskInputChange}
      />
      <Description
        descriptionInput={descriptionInput}
        handleDescriptionInputChange={handleDescriptionInputChange}
      />
      <AddTaskButton addTask={handleAddTask} />
      <div>
        <ToDoList tasks={tasks} deleteTask={deleteTask} />
        {tasks.map((_, index) => (
          <div key={index}>
            <DeleteTask index={index} deleteTask={deleteTask} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


