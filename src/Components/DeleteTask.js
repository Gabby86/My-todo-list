import React from 'react';

const DeleteTask = ({ index, deleteTask }) => {
  return (
    <button onClick={() => deleteTask(index)}>
      Done
    </button>
  );
};

export default DeleteTask;
