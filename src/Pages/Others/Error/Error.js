import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="flex items-center h-screen p-1">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <div>
            <button className='cursor-default'>
              <FaExclamationTriangle className='text-red-400 text-6xl'></FaExclamationTriangle>
            </button>
          </div>
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">Sorry, we couldn't find this page.</p>
          <Link to='/' className="px-8 py-1 font-semibold rounded bg-gray-400 text-gray-900 hover:bg-gray-300">Go Back</Link>
        </div>
      </div>
    </section>
  );
};

export default Error;