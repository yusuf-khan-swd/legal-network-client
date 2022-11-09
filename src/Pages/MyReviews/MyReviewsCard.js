import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

const MyReviewsCard = ({ review, handleDeleteReview }) => {
  const { img, name, description, title, _id, serviceId } = review;
  const [service, setService] = useState({});
  const { name: serviceName } = service;

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
        <button className="btn btn-ghost btn-xs">Edit</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {
                img ?
                  <img src={img} alt={name} />
                  :
                  <button className='btn'><FaUser></FaUser></button>
              }
            </div>
          </div>
          <div>
            <div className="font-bold"> {name} </div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm"> {description} </span>
      </td>
      <td>{serviceName}</td>
      <th>
        <button onClick={() => handleDeleteReview(_id)} className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default MyReviewsCard;