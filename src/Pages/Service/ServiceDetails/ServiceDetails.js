import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { photoURL, name, description, _id } = useLoaderData();

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <figure><img src={photoURL} className="h-72" alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="px-4 py-2 bg-orange-50 text-black border border-orange-500 hover:bg-orange-100 hover:border-orange-400">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;