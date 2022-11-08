import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a className="link link-hover" href="#">Installation</a>
              <a className="link link-hover" href="#">Release Notes</a>
              <a className="link link-hover" href="#">Upgrade Guide</a>
              <a className="link link-hover" href="#">Using with Preprocessors</a>
              <a className="link link-hover" href="#">Optimizing for Production</a>
              <a className="link link-hover" href="#">Browser Support</a>
              <a className="link link-hover" href="#">IntelliSense</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a className="link link-hover" href="#">Utility-First</a>
              <a className="link link-hover" href="#">Responsive Design</a>
              <a className="link link-hover" href="#">Hover, Focus, &amp; Other States</a>
              <a className="link link-hover" href="#">Dark Mode</a>
              <a className="link link-hover" href="#">Adding Base Styles</a>
              <a className="link link-hover" href="#">Extracting Components</a>
              <a className="link link-hover" href="#">Adding New Utilities</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">COMPANY</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <a className="link link-hover" href="#">GitHub</a>
              <a className="link link-hover" href="#">Discord</a>
              <a className="link link-hover" href="#">Twitter</a>
              <a className="link link-hover" href="#">YouTube</a>
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