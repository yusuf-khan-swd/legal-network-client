import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
  const { logOut, user } = useContext(AuthContext);
  useTitle('Reviews')

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
        console.log(data);
      })
  }, [user?.email, logOut]);
  return (
    <div>
      <h2>Reviews</h2>
    </div>
  );
};

export default MyReviews;