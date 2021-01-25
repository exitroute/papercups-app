import React from "react";

export default function ReviewPurchase(props) {
  const next = (e) => {
    props.nextStep();
  };

  const back = (e) => {
    props.lastStep();
  };

  return (
    <div>
      <h1>Review</h1>
      <button onClick={next}>next</button>
      <button>cancel</button>
      <button onClick={back}>back</button>
    </div>
  );
}
