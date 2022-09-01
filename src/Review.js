import React, { useState } from "react";
import data from "./data";
import "./Review.css";

function Review() {
  const [reviews, setReviews] = useState(data);

  return (
    <div className="review">
      <main>
        {reviews.map((review) => {
          return (
            <div className="single-review" key={review.id}>
              <img src={review.image} alt={review.name} />
              <h4>{review.name}</h4>
              <h6>{review.job}</h6>
              <p>{review.text}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Review;
