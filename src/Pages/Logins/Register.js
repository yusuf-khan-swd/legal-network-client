import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const { createUser, addUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = value => {
    const { name, photoURL, email, password, confirm } = value;

    if (password !== confirm) {
      return toast.error(`Password didn't matched.`);
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        handleAddUserProfile(name, photoURL);
        toast.success('Registration is successful!!!');

        fetch(`http://localhost:5000/jwt?email=${user.email}`)
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('legal-token', data.token);
          })
          .catch(err => {
            console.log('error: ', err);
          })

      })
      .catch(err => {
        console.error('error: ', err);
        toast.error(err.message);
      })
  };

  const handleAddUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    };

    addUserProfile(profile)
      .then(() => { })
      .catch(err => {
        console.error('error: ', err);
        toast.error(err.message);
      })
  };

  const handleShowPassword = event => {
    const isChecked = (event.target.checked);
    setShowPassword(isChecked);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} type="text" placeholder='Full Name' />
        <input {...register('photoURL')} type="text" placeholder='Photo URL' />
        <input {...register('email')} type="email" placeholder='Email' />
        <input {...register('password')} type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' />
        <input {...register('confirm')} type={`${showPassword ? 'text' : 'password'}`} placeholder='Confirm Password' />
        <input type="checkbox" onClick={handleShowPassword} id='showPass' /> <label htmlFor='showPass'>Show Password</label>
        <input type="submit" />
      </form>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Register;