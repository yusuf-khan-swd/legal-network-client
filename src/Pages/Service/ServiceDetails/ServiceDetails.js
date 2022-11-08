import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);

  return (
    <div>
      <h2>Service Card</h2>
    </div>
  );
};

export default ServiceDetails;