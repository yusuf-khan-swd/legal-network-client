import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewCard from '../Review/ReviewCard/ReviewCard';

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
  return (
    <div>
      <h2>Reviews {reviews.length} </h2>
      {
        reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
      }
    </div>
  );
};

export default MyReviews;