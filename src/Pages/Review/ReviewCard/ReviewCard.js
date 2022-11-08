import React from 'react';
import { FaUser } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  return (
    <div className='rounded-md mx-auto m-5'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto p-5">
        <div className='flex items-center'>
          {
            review?.img ?
              <figure><img src={review?.img} className="h-9 w-9 rounded-full mr-2" alt={review?.name} /></figure>
              :
              <button> <FaUser className="h-9 w-9 rounded-full mr-2"></FaUser> </button>
          }
          <p className='text-gray-500'>{review?.name}</p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{review?.title}</h2>
          <p>{review?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;