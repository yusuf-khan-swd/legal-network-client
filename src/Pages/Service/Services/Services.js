import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider } from 'react-photo-view';
import useTitle from '../../../hooks/useTitle';


const Services = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  useTitle('Services');

  useEffect(() => {
    setLoading(true);
    fetch('https://legal-network-server.vercel.app/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false)
      })
  }, []);

  if (loading) {
    return <div className="h-screen flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
    </div>
  }

  return (
    <div className='container mx-auto my-8'>
      <h2 className='text-3xl font-bold text-center text-orange-400 hover:underline cursor-pointer mb-3'>All Services</h2>
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