import React from 'react';
import { FaUser } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  return (
    <div className='max-w-screen-md border px-4 py-16 md:px-24 lg:px-8 lg:py-20 rounded-md mx-auto m-5'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <div className='flex'>
          {
            review?.img ?
              <figure><img src={review?.img} className="h-9 w-9 rounded-full" alt={review?.name} /></figure>
              :
              <button> <FaUser></FaUser> </button>
          }
          <p className='text-gray-600'>{review?.name}</p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{review?.name}</h2>
          <p>{review?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;