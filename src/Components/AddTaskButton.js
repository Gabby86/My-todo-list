import React from 'react';

const AddTaskButton = ({ addTask }) => {
  return <button className='input-btn' onClick={addTask}>Add</button>;
};

export default AddTaskButton;
