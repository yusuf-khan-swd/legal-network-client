import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
  const { photoURL, name, price, description, _id } = service;
  return (
    <div className="card card-compact w-fulls bg-base-100 shadow-xl m-3">
      <figure className='bg-white'>
        <PhotoView src={photoURL}>
          <img src={photoURL} className="h-72 w-full" alt={name} />
        </PhotoView>
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-center text-gray-700 uppercase">{name}</h2>
        <h2 className="card-title text-base justify-center text-gray-500">Price: <span className='text-orange-400'>${price}</span> </h2>
        <p className='text-gray-400'>{description.slice(0, 100) + '...'}</p>
        <div className="card-actions justify-end">
          <Link className='btn btn-md mt-2 w-full bg-orange-50 text-black border border-orange-400 hover:bg-orange-100 hover:border-orange-400"' to={`/services/${_id}`}>
            <button className="uppercase font-bold text-gray-500">view details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;