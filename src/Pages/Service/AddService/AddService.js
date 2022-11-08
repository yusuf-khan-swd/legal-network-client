import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
  const { user } = useContext(AuthContext);
  useTitle('Add Products')

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = value => {
    console.log(value);
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-screen-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className='text-3xl font-bold text-center hover:underline cursor-pointer text-orange-500'>Add Service</h2>
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
              <textarea {...register('description', { minLength: 110 })} className="textarea textarea-bordered" cols="30" rows="10" placeholder="Description"></textarea>
              {errors.description &&
                <label className="label">
                  <span className="label-text text-red-500">Description must be minimum greater then 110 character</span>
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