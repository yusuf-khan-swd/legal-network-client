import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const { createUser, addUserProfile } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = value => {
    const { name, photoURL, email, password, confirm } = value;

    if (password !== confirm) {
      return toast.error(`Password didn't matched.`);
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        handleAddUserProfile(name, photoURL);
        toast.success('Register is successful!!!');
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

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} type="text" placeholder='Full Name' />
        <input {...register('photoURL')} type="text" placeholder='Photo URL' />
        <input {...register('email')} type="email" placeholder='Email' />
        <input {...register('password')} type="password" placeholder='Password' />
        <input {...register('confirm')} type="password" placeholder='Confirm Password' />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;