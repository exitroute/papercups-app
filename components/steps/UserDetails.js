import React from "react";

export default function UserDetails(props) {
  const next = (e) => {
    props.nextStep();
  };

  const handleNameInput = (e) => {
    props.getUserDetails(e.target.value);
  };

  return (
    <div className="form-group">
      <h1>We need your name and email address</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter Name"
        onChange={handleNameInput}
      />
      <button>cancel</button>
      <button onClick={next}>next</button>
    </div>
  );
}
