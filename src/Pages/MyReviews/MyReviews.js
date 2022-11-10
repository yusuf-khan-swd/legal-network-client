import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
  const { logOut, user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useTitle("My Reviews");

  let myQuery = "";
  if (user.email) {
    myQuery = user.email;
  } else if (user.displayName) {
    myQuery = user.displayName;
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://legal-network-server.vercel.app/my-reviews?email=${myQuery}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("legal-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setReviews(data);
      });
  }, [myQuery, logOut]);

  const handleDeleteReview = (id) => {
    const isConfirm = window.confirm("Are you sure you want to delete?");

    if (!isConfirm) {
      return;
    }

    fetch(`https://legal-network-server.vercel.app/my-reviews/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("legal-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Review is Deleted!!");
          const newReviews = reviews.filter((rv) => rv._id !== id);
          setReviews(newReviews);
        }
      });
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
      </div>
    );
  }

  return (
    <div>
      {reviews.length === 0 ? (
        <div className="h-screen bg-orange-50 flex justify-center items-center text-5xl font-bold text-orange-300">
          You Have 0 Items
        </div>
      ) : (
        <div className="overflow-x-auto bg-orange-50 w-full min-h-screen">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Review</th>
                <th>Service</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <MyReviewsCard
                  key={review._id}
                  review={review}
                  handleDeleteReview={handleDeleteReview}
                ></MyReviewsCard>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
