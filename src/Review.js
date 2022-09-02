import React, { useState } from "react";
import data from "./data";
import "./Review.css";

function Review() {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = data[index];

  const showNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    });
  };

  const showPrevious = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex;
    });
  };
  return (
    <div className="review">
      <main>
        <div className="single-review">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <h6>{job}</h6>
          <p>{text}</p>
          <div>
            <button onClick={showPrevious}> &#8249;</button>
            <button onClick={showNext}> &#8250;</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Review;
