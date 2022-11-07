import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Link to='/home'>Home</Link>
      <Link to='/blog'>Blog</Link>
    </div>
  );
};

export default Header;