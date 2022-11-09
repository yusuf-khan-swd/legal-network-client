import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { photoURL, name, price, description, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <figure><img src={photoURL} className="h-72" alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">Price: {price}</h2>
        <p>{description.slice(0, 100) + '...'}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn bg-orange-50 text-black border border-orange-500 hover:bg-orange-100 hover:border-orange-400">view details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;