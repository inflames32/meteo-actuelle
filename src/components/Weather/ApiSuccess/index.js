import React from 'react';

const ApiSuccess = ({ API, units }) => {
  console.log(API);

  return (

    <div>
      <div className="container-cityName">{API.name}</div>
      <div className="container-cityName">{API.main.temp}</div>
    </div>
  );
};

export default ApiSuccess;
