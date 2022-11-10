import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import googleLogo from '../../assets/googleLogo.png';
import githubLogo from '../../assets/githubLogo.png';

const Login = () => {
  const { logIn, googleLogIn, githubLogIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  useTitle('Login')

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { register, handleSubmit, formState: { errors } } = useForm();

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

  const handleGoogleLogIn = () => {
    googleLogIn()
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

  const handleGithubLogIn = () => {
    githubLogIn()
      .then(result => {
        const user = result.user;
        toast.success(`${user.displayName} you are now logged in!!`);

        fetch(`http://localhost:5000/jwt?email=${user.displayName}`)
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
      <div className="min-h-screen bg-orange-50 my-16">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto px-2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className='text-3xl font-bold text-center hover:underline cursor-pointer'>Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" required />
              {errors.email &&
                <label className="label">
                  <span className="label-text text-red-500">Email Is Required</span>
                </label>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? 'text' : 'password'} placeholder="password" {...register('password', { required: true })} className="input input-bordered" required />
              {errors.password &&
                <label className="label">
                  <span className="label-text text-red-500">Password Is Required</span>
                </label>
              }
            </div>
            <div className="form-control">
              <label className="cursor-pointer label justify-start">
                <input onClick={handleShowPassword} type="checkbox" className="checkbox checkbox-warning mr-2" />
                <span className="label-text">Show Password</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn bg-orange-50 border border-orange-400 text-orange-400 hover:bg-orange-200 hover:border-orange-600">Login</button>
            </div>
          </form>
          <button onClick={handleGoogleLogIn} className='btn w-full rounded-full mb-3'>
            <img className='w-9 h-9 mr-3' src={googleLogo} alt="Google Logo" />
            Sign In with Google
          </button>
          <button onClick={handleGithubLogIn} className='btn w-full rounded-full mb-5 '>
            <img className='w-9 h-9 mr-3' src={githubLogo} alt="Google Logo" />
            Sign In with Github
          </button>
          <div className='pb-5 pl-3 text-center'>
            New to Legal Network? <Link to='/register' className='text-violet-600 hover:underline'>Please Register</Link>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Login;