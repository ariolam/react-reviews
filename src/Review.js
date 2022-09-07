import React, { useState } from "react";
import data from "./data";
import { BsChatRightQuote } from "react-icons/bs";
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
    setIndex(showSequence(randomNumber));
  };
  return (
    <div className="review">
      <main>
        <div className="single-review">
          <div className="img-container">
            {" "}
            <img src={image} alt={name} />
            <span className="quote-icon">
              {" "}
              <BsChatRightQuote size={35} />{" "}
            </span>
          </div>
          <h4>{name}</h4>
          <h6>{job}</h6>
          <p>{text}</p>
          <div>
            <button className="prev-btn border-0" onClick={showPrevious}>
              {" "}
              &#8249;
            </button>
            <button className="next-btn ms-3 border-0" onClick={showNext}>
              {" "}
              &#8250;
            </button>
          </div>
        </div>
        <button className="random-btn mt-2 mb-2 border-0" onClick={showRandom}>
          {" "}
          Surprise me{" "}
        </button>
      </main>
    </div>
  );
}

export default Review;
