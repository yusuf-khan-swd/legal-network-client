import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Service/ServiceCard/ServiceCard';
import Counter from '../Counter/Counter';
import Feature from '../Feature/Feature';
import Team from '../Team/Team';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider } from 'react-photo-view';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  const popularServices = useLoaderData();
  useTitle('Home');

  return (
    <div className='container mx-auto my-8'>
      <Banner></Banner>
      <div className='mb-5'>
        <h1 className='text-3xl underline underline-offset-8 font-bold text-orange-400 text-center mb-2'>The Popular Services That Are Now Trending</h1>
        <p> <FaArrowDown className='text-3xl text-orange-400 mx-auto'></FaArrowDown> </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <PhotoProvider>
          {
            popularServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </PhotoProvider>
      </div>
      <div className='text-center mb-12 mt-8'>
        <Link to='/services' className='btn px-12 bg-white text-gray-600 outline outline-orange-400 border-none hover:bg-zinc-300 hover:border-none'>See More</Link>
      </div>
      <hr className='w-11/12 mx-auto' />
      <Feature></Feature>
      <hr className='w-11/12 mx-auto' />
      <div className='my-12'>
        <h2 className='text-xl font-semibold text-center mb-3'>Hot Deal Only Available For</h2>
        <Counter></Counter>
      </div>
      <hr className='w-11/12 mx-auto' />
      <Team></Team>
      <hr className='w-11/12 mx-auto' />
    </div>
  );
};

export default Home;