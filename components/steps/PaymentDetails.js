import React from "react";

export default function PaymentDetails(props) {
  const next = (e) => {
    props.nextStep();
  };

  const back = (e) => {
    props.lastStep();
  };

  const handlePaymentChange = (e) => {
    props.getPaymentDetails(e.target.value);
  };

  return (
    <div>
      <h1>Payment</h1>
      <label htmlFor="Name">Credit Card</label>
      <input
        type="text"
        id="cc"
        placeholder="Enter Credit Card Number"
        onChange={handlePaymentChange}
      />
      <button onClick={next}>next</button>
      <button>cancel</button>
      <button onClick={back}>back</button>
    </div>
  );
}
