import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Sign-out successful.');
      })
      .catch(err => {
        console.error('error: ', err);
        toast.error(err.message);
      })
  };

  return (
    <div>
      <h2>Header</h2>
      <Link to='/home'>Home</Link>
      <Link to='/blog'>Blog</Link>
      {
        user?.uid ?
          <>
            <Link>My Reviews</Link>
            <Link>Add Service</Link>
            <button onClick={handleLogOut}>Logout</button>
          </>
          :
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
      }
    </div>
  );
};

export default Header;