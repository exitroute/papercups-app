import React from "react";

export default function UserDetails(props) {
  const next = (e) => {
    props.nextStep();
  };

  return (
    <div className="form-group">
      <h1>We need your name and email address</h1>
      <label htmlFor="Name">Name</label>
      <input
        className="form-control"
        type="text"
        id="name"
        placeholder="Enter Name"
      />
      <button>cancel</button>
      <button onClick={next}>next</button>
    </div>
  );
}
