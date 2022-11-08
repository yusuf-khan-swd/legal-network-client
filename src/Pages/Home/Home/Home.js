import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Home = () => {
  const popularServices = useLoaderData();

  return (
    <div className='container mx-auto my-8'>
      <h2>Home Component.</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          popularServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Home;