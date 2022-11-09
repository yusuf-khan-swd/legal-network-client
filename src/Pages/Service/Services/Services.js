import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider } from 'react-photo-view';

const Services = () => {
  const services = useLoaderData();

  return (
    <div className='container mx-auto my-8'>
      <h2>All Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <PhotoProvider>
          {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Services;