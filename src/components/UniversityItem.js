import React from 'react';

const UniversityItem = ({ university }) => {
  return (
    <div className="university-item">
      <h3>{university.name}</h3>
      {/* Add more details as needed */}
    </div>
  );
};

export default UniversityItem;