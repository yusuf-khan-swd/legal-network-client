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
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                {
                  user?.uid ?
                    <>
                      <li>
                        <Link to='/reviews'>My Reviews</Link>
                      </li>
                      <li>
                        <Link>Add Service</Link>
                      </li>
                      <li><button onClick={handleLogOut}>Logout</button></li>
                    </>
                    :
                    <>
                      <Link to='/login'>Login</Link>
                    </>
                }
                <li className='border-2 border-orange-400 rounded-lg'>
                  <Link to='/blog'>Blog</Link>
                </li>
              </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">Legal Network</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to='/home'>Home</Link>
              </li>
              {
                user?.uid ?
                  <>
                    <li>
                      <Link to='/reviews'>My Reviews</Link>
                    </li>
                    <li>
                      <Link>Add Service</Link>
                    </li>
                    <li><button onClick={handleLogOut}>Logout</button></li>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                  </>
              }
              <li className='border-2 border-orange-400 rounded-lg'>
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">

            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt={user?.displayName} />
              </div>
            </label>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;