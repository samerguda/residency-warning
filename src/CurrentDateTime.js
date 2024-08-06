// src/CurrentDateTime.js
import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="current-date-time">
      <h1>{currentDateTime.toLocaleString()}</h1>
    </div>
  );
};

export default CurrentDateTime;
