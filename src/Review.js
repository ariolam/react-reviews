import React, { useState } from "react";
import data from "./data";
import "./Review.css";

function Review() {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = data[index];

  const showSequence = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const showNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return showSequence(newIndex);
    });
  };

  const showPrevious = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return showSequence(newIndex);
    });
  };
  const showRandom = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    console.log(randomNumber);
    setIndex(showSequence(randomNumber));
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
        <button onClick={showRandom}> Surprise me </button>
      </main>
    </div>
  );
}

export default Review;
