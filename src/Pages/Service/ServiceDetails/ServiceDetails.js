import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { photoURL, name, description, _id } = useLoaderData();

  return (
    <div>
      <h2 className='text-3xl font-bold'>Service Section</h2>
      <div className='max-w-screen-md border px-4 py-16 md:px-24 lg:px-8 lg:py-20 rounded-md mx-auto m-5'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
          <figure><img src={photoURL} className="h-72" alt={name} /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServiceDetails;