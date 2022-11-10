import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import googleLogo from '../../assets/googleLogo.png';
import githubLogo from '../../assets/githubLogo.png';

const Register = () => {
  const { createUser, addUserProfile, googleLogIn, githubLogIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  useTitle('Register');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
        reset();

        setLoading(true);
        fetch(`https://legal-network-server.vercel.app/jwt?email=${user.email}`)
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('legal-token', data.token);
            setLoading(false);
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

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(result => {
        const user = result.user;
        toast.success(`${user.displayName} you are now logged in!!`);

        setLoading(true);
        fetch(`https://legal-network-server.vercel.app/jwt?email=${user.email}`)
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('legal-token', data.token);
            setLoading(false);
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
        toast.success(`${user.displayName} you are now logged In!!`);

        setLoading(true);
        fetch(`https://legal-network-server.vercel.app/jwt?email=${user.displayName}`)
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('legal-token', data.token);
            setLoading(false);
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

  if (loading) {
    return <div className="h-screen flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
    </div>
  }

  return (
    <div>
      <div className="min-h-screen bg-orange-50 my-16">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-screen-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className='text-3xl font-bold text-center hover:underline cursor-pointer text-orange-500'>Register</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" {...register('name', { required: true })} placeholder="Full Name" className="input input-bordered" required />
                {errors.name &&
                  <label className="label">
                    <span className="label-text text-red-500">Full Name Is Required</span>
                  </label>
                }
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register('photoURL', { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                {errors.photoURL &&
                  <label className="label">
                    <span className="label-text text-red-500">Photo URL Is Required</span>
                  </label>
                }
              </div>
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
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type={showPassword ? 'text' : 'password'} placeholder="password" {...register('confirm', { required: true })} className="input input-bordered" required />
                {errors.confirm &&
                  <label className="label">
                    <span className="label-text text-red-500">Confirm Password Is Required</span>
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
                <button type='submit' className="btn bg-orange-50 border border-orange-400 text-orange-400 hover:bg-orange-200 hover:border-orange-600">Register</button>
              </div>
            </form>
            <button onClick={handleGoogleLogIn} className='btn w-full rounded-full mb-3'>
              <img className='w-9 h-9 mr-3' src={googleLogo} alt="Google Logo" />
              Sign Up with Google
            </button>
            <button onClick={handleGithubLogIn} className='btn w-full rounded-full mb-5 '>
              <img className='w-9 h-9 mr-3' src={githubLogo} alt="Google Logo" />
              Sign Up with Github
            </button>
            <div className='pb-5 pl-3 text-center'>
              Already have an account? <Link to='/login' className='text-violet-600 hover:underline'>Please login</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;