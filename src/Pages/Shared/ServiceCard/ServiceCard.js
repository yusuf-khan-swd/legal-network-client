import React from 'react';

const ServiceCard = ({ service }) => {
  const { photoURL, name, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={photoURL} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;