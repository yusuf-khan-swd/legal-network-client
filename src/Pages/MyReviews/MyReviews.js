import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
  const { logOut, user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle('My Reviews');

  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('legal-token')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then(data => {
        setReviews(data);
      })
  }, [user?.email, logOut]);

  const handleDeleteReview = id => {
    fetch(`http://localhost:5000/my-reviews/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('legal-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Review is Deleted!!');
          const newReviews = reviews.filter(rv => rv._id !== id);
          setReviews(newReviews);
        }
      })
  };

  return (
    <div>
      {
        reviews.length === 0 ?
          <div className='h-screen flex justify-center items-center text-5xl font-bold text-orange-300'>
            You Have 0 Items
          </div>
          :
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  reviews.map(review => <MyReviewsCard key={review._id} review={review} handleDeleteReview={handleDeleteReview}></MyReviewsCard>)
                }

              </tbody>
            </table>
          </div>
      }
    </div>
  );
};

export default MyReviews;