import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
  const { logOut, user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
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
        console.log(data);
      })
  }, [user?.email, logOut]);
  return (
    <div>
      <h2>Reviews</h2>
    </div>
  );
};

export default Reviews;