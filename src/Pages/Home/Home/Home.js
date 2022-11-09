import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Service/ServiceCard/ServiceCard';
import Counter from '../Counter/Counter';
import Feature from '../Feature/Feature';
import Team from '../Team/Team';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider } from 'react-photo-view';

const Home = () => {
  const popularServices = useLoaderData();

  return (
    <div className='container mx-auto my-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <PhotoProvider>
          {
            popularServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </PhotoProvider>
      </div>
      <div className='text-center mt-5'>
        <Link to='/services' className='btn bg-white text-gray-600 outline outline-orange-400 border-none hover:bg-orange-300 hover:border-none px-6'>See More</Link>
      </div>
      <Feature></Feature>
      <Counter></Counter>
      <Team></Team>
    </div>
  );
};

export default Home;