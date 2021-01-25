import React from "react";

export default function UserDetails() {
  return (
    <div className="form-group">
      <h1>We need your name and email address</h1>
      <label htmlFor="Name"></label>
      <input type="text" />
      <label htmlFor="Email"></label>
      <input type="text" />
      <button>back</button>
      <button>cancel</button>
      <button>next</button>
    </div>
  );
}
