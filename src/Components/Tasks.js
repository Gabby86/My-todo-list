import React from 'react';

const Tasks = ({ taskInput, handleTaskInputChange }) => {
  return (
    <div>
       <h2 className='new'>New Task:</h2> 
      <label className='label'>Tasks:</label>
      <input className='task' type="text" value={taskInput} onChange={handleTaskInputChange} required />
    </div>
  );
};

export default Tasks;
