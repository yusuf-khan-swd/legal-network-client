import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  useTitle('Login')

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit } = useForm();

  const onSubmit = value => {
    const { email, password } = value;

    logIn(email, password)
      .then(result => {
        const user = result.user;
        toast.success(`${user.displayName} you are now logged in!!`);

        fetch(`http://localhost:5000/jwt?email=${user.email}`)
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('legal-token', data.token);
            navigate(from, { replace: true });
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

  const handleShowPassword = event => {
    const isChecked = (event.target.checked);
    setShowPassword(isChecked);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} type="email" placeholder='Email' />
        <input {...register('password')} type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' />
        <input type="checkbox" onClick={handleShowPassword} id='showPass' /> <label htmlFor='showPass'>Show Password</label>
        <input type="submit" />
      </form>
      <Link to='/register'>Register</Link>
    </div>
  );
};

export default Login;