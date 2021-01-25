import React from "react";

export default function PaymentDetails(props) {
  const next = (e) => {
    props.nextStep();
  };

  const back = (e) => {
    props.lastStep();
  };

  return (
    <div>
      <h1>Payment</h1>
      <label htmlFor="Name">Credit Card</label>
      <input
        className="form-control"
        type="text"
        id="cc"
        placeholder="Enter Credit Card Number"
      />
      <button onClick={next}>next</button>
      <button>cancel</button>
      <button onClick={back}>back</button>
    </div>
  );
}
