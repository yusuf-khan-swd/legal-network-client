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
      <div>
        <h2 className='text-2xl underline underline-offset-8 font-bold text-orange-400 text-center mb-3'>The Popular Services That We Provide</h2>
        <p> <FaArrowDown className='text-3xl text-orange-400 mx-auto'></FaArrowDown> </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <PhotoProvider>
          {
            popularServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </PhotoProvider>
      </div>
      <div className='text-center mt-10'>
        <Link to='/services' className='btn px-12 bg-white text-gray-600 outline outline-orange-400 border-none hover:bg-zinc-300 hover:border-none'>See More</Link>
      </div>
      <Feature></Feature>
      <Counter></Counter>
      <Team></Team>
    </div>
  );
};

export default Home;