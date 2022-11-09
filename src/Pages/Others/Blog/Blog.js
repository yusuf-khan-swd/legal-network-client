import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog');
  return (
    <div>
      <h2>Blog component</h2>
    </div>
  );
};

export default Blog;