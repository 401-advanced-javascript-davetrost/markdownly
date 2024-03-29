import React from 'react';
import PropTypes from 'prop-types';

const AddFile = ({ handleSubmit, handleChange, newFileName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="fileName"
        type="text"
        placeholder="New File Name"
        value={newFileName}
        required
      />
      <button>+</button>
    </form>
  );
};

AddFile.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newFileName: PropTypes.string.isRequired
};

export default AddFile;
