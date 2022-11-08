import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Home = () => {
  const popularServices = useLoaderData();

  return (
    <div>
      <h2>Home Component.</h2>
      {
        popularServices.map(service => <ServiceCard key={service._id}></ServiceCard>)
      }
    </div>
  );
};

export default Home;