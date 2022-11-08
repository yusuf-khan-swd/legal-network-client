import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { photoURL, name, description, _id } = useLoaderData();

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <figure><img src={photoURL} className="h-72" alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;