import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Need to Know About Us</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link className="link link-hover" to='/services'>Services</Link>
              <Link className="link link-hover" to='/'>Release Notes</Link>
              <Link className="link link-hover" to='/'>Upgrade Guide</Link>
              <Link className="link link-hover" to='/'>Super Cool Stuff</Link>
              <Link className="link link-hover" to='/'>Optimizing for People</Link>
              <Link className="link link-hover" to='/'>All Time Support</Link>
              <Link className="link link-hover" to='/'>IntelliSense Provide</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link className="link link-hover" to='/'>Law is first</Link>
              <Link className="link link-hover" to='/'>Responsible Answer</Link>
              <Link className="link link-hover" to='/'>Dark Mode</Link>
              <Link className="link link-hover" to='/'>Adding Base Styles</Link>
              <Link className="link link-hover" to='/'>Extracting Components</Link>
              <Link className="link link-hover" to='/'>Adding New Utilities</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">COMPANY</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link className="link link-hover" to='/'>About us</Link>
              <Link className="link link-hover" to='/'>Contact</Link>
              <Link className="link link-hover" to='/'>Jobs</Link>
              <Link className="link link-hover" to='/'>Press kit</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link className="link link-hover" to='/'>GitHub</Link>
              <Link className="link link-hover" to='/'>Discord</Link>
              <Link className="link link-hover" to='/'>Twitter</Link>
              <Link className="link link-hover" to='/'>YouTube</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="dark:text-gray-400">&copy; Copyright 2022 . All Rights <Link to='/' className='text-orange-400'>Legal Network</Link> Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;