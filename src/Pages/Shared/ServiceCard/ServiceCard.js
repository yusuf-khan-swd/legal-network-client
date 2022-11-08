import React from 'react';

const ServiceCard = ({ service }) => {
  const { photoURL, name, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={photoURL} alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-50 text-black border border-orange-500 hover:bg-orange-100 hover:border-orange-400">view details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;