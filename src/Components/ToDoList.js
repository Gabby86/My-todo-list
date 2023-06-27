import React from 'react';

const ToDoList = ({ tasks }) => {
  return (
    <div>
      <h2 className='todo'>My ToDo List:</h2> 
      {tasks.length === 0 ? (
        <p className='no-task'>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div>
                <strong>{task.task}</strong>
                {task.description && <p>{task.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;


