import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const EditReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState({});
  const { title, description } = review;
  const [loading, setLoading] = useState(false);
  useTitle('Update Review');

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = value => {
    const isConfirm = window.confirm('Are your sure you want to update?');
    if (!isConfirm) {
      return;
    }

    value.date = new Date();

    fetch(`https://legal-network-server.vercel.app/my-review/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(value)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Update was successful.');
          setReview(value);
          setLoading(false)
        }
      })
  };

  const handleCancel = () => {
    reset();
  };

  useEffect(() => {
    fetch(`https://legal-network-server.vercel.app/my-review/${id}`)
      .then(res => res.json())
      .then(data => {
        setReview(data);
        setLoading(false)
      })
  }, [id]);

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
    <div className='my-8 bg-orange-50'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm shadow-lg p-5 mx-auto rounded-md bg-white'>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Title</span>
          </label>
          <input {...register('title', { required: true })} type="text" placeholder="Title" defaultValue={title} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <textarea {...register('description', { required: true })} className="textarea textarea-bordered" defaultValue={description} cols="30" rows="6"></textarea>
        </div>
        <div className="form-control mt-6">
          <input type={'submit'} value={'Update'} className="btn btn-warning" />
        </div>
        <div className='mt-6 text-center'>
          <button type='button' className='btn btn-ghost bg-slate-200' onClick={handleCancel}>Cancel</button>
        </div>

      </form>
    </div>
  );
};

export default EditReview;