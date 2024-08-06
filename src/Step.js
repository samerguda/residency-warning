import React from "react";

function Step({ number, description }) {
  return (
    <div className="Step">
      <h2>الخطوة {number}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Step;
