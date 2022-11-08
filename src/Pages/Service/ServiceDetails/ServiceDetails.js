import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
  const { photoURL, name, description, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

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
              <form>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button type='submit'>Add Review</button>
              </form>
            </div>
            :
            <div className='pb-3 pl-3'>
              Please login to add a review <Link to='/login' className='text-violet-600 hover:underline'>login</Link>
            </div>
        }
        <div>
          <h2 className='text-xl font-bold'>Show all review</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;