// UniversitiesList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUniversities } from '../actions/universitiesActions';

const UniversitiesList = () => {
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.universities.universities);
  const loading = useSelector((state) => state.universities.loading);
  const error = useSelector((state) => state.universities.error);

  useEffect(() => {
    dispatch(fetchUniversities());
  }, [dispatch]);

  return (
    <div>
      <h1>Universities in the United States</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {universities.map((university) => (
            <div key={university.name}>
              <h3>{university.name}</h3>
              <p>
                <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
                  {university.web_pages[0]}
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversitiesList;
