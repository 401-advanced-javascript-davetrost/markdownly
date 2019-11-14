import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ files, handleTabSelect }) => {
  const tabElements = Object.values(files).map(file => {
    return (
      <li 
        key={file.id || file.fileName} 
        name={file.fileName} 
        onClick={() => handleTabSelect(file.fileName)}>
        {file.fileName}
      </li>
    );
  });

  return (
    <ul>
      {tabElements}
    </ul>
  );
};

Tabs.propTypes = {
  files: PropTypes.object.isRequired,
  handleTabSelect: PropTypes.func.isRequired
};

export default Tabs;
