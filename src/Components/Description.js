import React from 'react';

const Description = ({ descriptionInput, handleDescriptionInputChange }) => {
  return (
    <div>
      <label className='desc' >Description:</label>
      <input className='input' type="text" value={descriptionInput} onChange={handleDescriptionInputChange} />
    </div>
    
  );
};

export default Description;
