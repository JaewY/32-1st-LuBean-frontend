import React from "react";

const Star = ({ onStarChange }) => {
  return (
    <>
      {[5, 4, 3, 2, 1].map(num => (
        <label key={num} htmlFor={`star${num}`}>
          <input
            type="radio"
            id={`star${num}`}
            name="star"
            value={num}
            onClick={onStarChange}
          />
          {"★".repeat(num) + "☆".repeat(5 - num)}
        </label>
      ))}
    </>
  );
};

export default Star;
