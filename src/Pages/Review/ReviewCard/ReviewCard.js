import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="card bg-base-100 max-w-screen-sm shadow-xl">
      <div>
        <figure><img src="https://placeimg.com/200/280/arch" className='h-10 w-10 rounded-full' alt="Movie" /></figure>
        <h2 className="card-title"> {review?.name} </h2>
      </div>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;