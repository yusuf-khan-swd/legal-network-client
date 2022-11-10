import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewCard from './ReviewCard';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { photoURL, name, price, description, _id } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  useTitle('Service Details');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = value => {
    value.name = user.displayName;
    value.email = user.email;
    value.img = user.photoURL;
    value.serviceId = _id;
    value.date = new Date();

    fetch('https://legal-network-server.vercel.app/reviews', {
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
          const newReviews = [value, ...reviews];
          setReviews(newReviews);
          reset();
        }
      })
  };

  useEffect(() => {
    fetch(`https://legal-network-server.vercel.app/reviews?serviceId=${_id}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      })
  }, [_id]);

  return (
    <div>
      <div className='max-w-screen-md border px-4 py-16 md:px-24 lg:px-8 lg:py-20 rounded-md mx-auto m-5'>
        <div className="card card-compact w-96 lg:w-3/4 bg-base-100 shadow-xl mx-auto">
          <figure><img src={photoURL} className="h-72 rounded-full" alt={name} /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h2 className="card-title">Price: {price}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div>
        <hr className='w-11/12 mx-auto' />
        {
          user?.uid ?
            <div>
              <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-screen-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-lg">Title:</span>
                      </label>
                      <input type="text" {...register('title', { required: true })} placeholder="Title Name" className="input input-bordered" required />
                      {errors.title &&
                        <label className="label">
                          <span className="label-text text-red-500">Title Is Required</span>
                        </label>
                      }
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-lg">Description:</span>
                      </label>
                      <textarea {...register('description', { minLength: 20 })} className="textarea textarea-bordered" cols="30" rows="3" placeholder="Description" defaultValue={`${name}`}></textarea>
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
            <div className='pb-3 pl-3 text-center font-bold mt-3'>
              Please login to add a review <Link to='/login' className='text-violet-600 underline'>login</Link>.
            </div>
        }
        <div>

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