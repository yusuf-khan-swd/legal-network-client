import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const EditReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState({});
  const { title, description } = review;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = value => {
    const isConfirm = window.confirm('Are your sure you want to update?');
    if (!isConfirm) {
      return;
    }
    console.log(value);
  };

  const handleCancel = () => {
    reset();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/my-review/${id}`)
      .then(res => res.json())
      .then(data => {
        setReview(data);
      })
  }, [id]);

  return (
    <div className='my-8'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm shadow-lg p-5 mx-auto rounded-md'>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Title</span>
          </label>
          <input {...register('title')} type="text" placeholder="Title" defaultValue={title} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <textarea {...register('description')} className="textarea textarea-bordered" defaultValue={description} cols="30" rows="6"></textarea>
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