import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div className="result-container">
      <h2>Quiz Complete!</h2>
      <p>
        You scored {score} out of {total}.
      </p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default Result;
