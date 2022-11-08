import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../../Review/ReviewCard/ReviewCard';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { photoURL, name, description, _id } = useLoaderData();
  const [reviews, setReviews] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = value => {
    value.name = user.displayName;
    value.email = user.email;
    value.photoURL = user.photoURL;
    value.serviceId = _id;

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(value)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success(`Thank you ${user.displayName} for your review.`);
        }
      })
  };

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      })
  }, []);

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
      <div>
        <h2 className='text-3xl font-bold'>Review Section</h2>
        {
          user?.uid ?
            <div>
              <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-screen-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                      <textarea {...register('description', { minLength: 20 })} className="textarea textarea-bordered" cols="30" rows="5" placeholder="Description" defaultValue='This Service is'></textarea>
                      {errors.description &&
                        <label className="label">
                          <span className="label-text text-red-500">Please add some of your thought.</span>
                        </label>
                      }
                    </div>
                    <div className="form-control mt-6">
                      <button type='submit' className="btn bg-orange-50 border border-orange-400 text-orange-400 hover:bg-orange-200 hover:border-orange-600">Add Review</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            :
            <div className='pb-3 pl-3'>
              Please login to add a review <Link to='/login' className='text-violet-600 hover:underline'>login</Link>
            </div>
        }
        <div>
          <h2 className='text-xl font-bold'>Show all review</h2>
          <div className='grid grid-cols-1 gap-8'>
            {
              reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;