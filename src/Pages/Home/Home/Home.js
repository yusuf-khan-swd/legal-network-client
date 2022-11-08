import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Home = () => {
  const popularServices = useLoaderData();

  return (
    <div className='container mx-auto my-8'>
      <h2>Home Component.</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          popularServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
      <div className='text-center mt-5'>
        <Link to='/services' className='btn bg-white text-gray-600 outline outline-orange-400 border-none hover:bg-orange-300 hover:border-none px-6'>See More</Link>
      </div>
    </div>
  );
};

export default Home;