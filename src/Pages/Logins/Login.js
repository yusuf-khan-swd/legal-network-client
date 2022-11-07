import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = value => {
    const { email, password } = value;

    logIn(email, password)
      .then(result => {
        const user = result.user;
        toast.success(`${user.displayName} you are now logged in!!`);
      })
      .catch(err => {
        console.error('error: ', err);
        toast.error(err.message);
      })
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} type="email" placeholder='Email' />
        <input {...register('password')} type="password" placeholder='Password' />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;