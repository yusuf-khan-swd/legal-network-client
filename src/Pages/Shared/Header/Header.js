import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import './Header.css';
import logo from '../../../assets/logo.ico';

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

  const menuItems = <>
    <li>
      <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/Services'>Services</NavLink>
    </li>
    {
      user?.uid ?
        <>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/my-reviews'>My Reviews</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/add-service'>Add Service</NavLink>
          </li>
          <li><button onClick={handleLogOut}>Logout</button></li>
        </>
        :
        <>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </>
    }
    <li>
      <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/blog'>Blog</NavLink>
    </li>
  </>

  return (
    <div className='h-20 pb-2 z-50 sticky top-0'>
      <nav className='rounded-lg'>
        <div className="navbar bg-base-100 py-3">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {
                  menuItems
                }
              </ul>
            </div>
            <div className='btn btn-ghost'>
              <Link to='/' className="text-base md:text-xl flex justify-center items-center ml-5">
                <img className='mr-3 w-9 h-9' src={logo} alt="" />
                <p>Legal Network</p>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menuItems}
            </ul>
          </div>
          <div className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user?.photoURL ?
                    <img src={user?.photoURL} alt={user?.displayName} />
                    :
                    user?.uid ?
                      <button>
                        <FaUser className='text-2xl'></FaUser>
                      </button>
                      :
                      <Link to='/login'>
                        <button>
                          <FaUser className='text-2xl'></FaUser>
                        </button>
                      </Link>
                }
              </div>
            </label>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;