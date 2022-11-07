import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = value => {
    const { name, photoURL, email, password, confirm } = value;
    if (password !== confirm) {
      return toast.error(`Password didn't matched.`);
    }
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