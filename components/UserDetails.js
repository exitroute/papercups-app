import React from "react";

export default function UserDetails() {
  return (
    <div className="form-group">
      <label htmlFor="Name">Name</label>
      <input
        className="form-control"
        type="text"
        id="name"
        placeholder="Enter Name"
      />
      <label htmlFor="Email"></label>
      <input type="text" />
      <button>back</button>
      <button>cancel</button>
      <button>next</button>
    </div>
  );
}
