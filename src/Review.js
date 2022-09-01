import React, { useState } from "react";
import data from "./data";
import "./Review.css";

function Review() {
  const [reviews, setReviews] = useState(data);

  //   function showNext(id) {
  //     //setReviews();
  //     console.log(id);
  //   }

  const review = reviews[0];

  return (
    <div className="review">
      <main>
        <div className="single-review">
          <img src={review.image} alt={review.name} />
          <h4>{review.name}</h4>
          <h6>{review.job}</h6>
          <p>{review.text}</p>
          <button onClick={() => setReviews([review.id + 1])}> Next</button>
        </div>
      </main>
    </div>
  );
}

export default Review;
