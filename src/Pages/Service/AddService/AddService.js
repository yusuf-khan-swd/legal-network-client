import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
  const { user } = useContext(AuthContext);
  useTitle('Add Service');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = value => {
    value.date = new Date();

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(value)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Service Added!!')
          reset();
        }
      })
  };

  return (
    <div className="min-h-screen bg-orange-50 my-16">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-screen-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className='text-3xl font-bold text-center hover:underline cursor-pointer text-orange-500'>Create a Service</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input type="text" {...register('name', { required: true })} placeholder="Service Name" className="input input-bordered" required />
              {errors.name &&
                <label className="label">
                  <span className="label-text text-red-500">Service Name Is Required</span>
                </label>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Price</span>
              </label>
              <input type="text" {...register('price', { required: true })} placeholder="Service Price" className="input input-bordered" required />
              {errors.price &&
                <label className="label">
                  <span className="label-text text-red-500">Service Price Is Required</span>
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
              <input type="email" {...register('email')} defaultValue={user?.email} readOnly className="input input-bordered" />
            </div>
            <div className="form-control">
              <textarea {...register('description', { minLength: 120 })} className="textarea textarea-bordered" cols="30" rows="5" placeholder="Description"></textarea>
              {errors.description &&
                <label className="label">
                  <span className="label-text text-red-500">Description must be greater then 120 character</span>
                </label>
              }
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn bg-orange-50 border border-orange-400 text-orange-400 hover:bg-orange-200 hover:border-orange-600">Add Service</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default AddService;