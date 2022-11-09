import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewsCard = ({ review, handleDeleteReview }) => {
  const { name, description, title, _id, serviceId } = review;
  const [service, setService] = useState({});
  const { name: serviceName, photoURL } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then(res => res.json())
      .then(data => {
        setService(data)
      })
  }, [serviceId]);

  return (
    <tr>
      <th>
        <Link to={`/my-review/${_id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-bold"> {serviceName} </div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm"> {description.slice(0, 51) + '...'} </span>
      </td>
      <td>{serviceName}</td>
      <th>
        <button onClick={() => handleDeleteReview(_id)} className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default MyReviewsCard;