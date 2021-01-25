import React from "react";

export default function UserDetails() {
  return (
    <div className="form-group">
      <label htmlFor="Name"></label>
      <input type="text" />
      <label htmlFor="Email"></label>
      <input type="text" />
      <button>Cancel</button>
      <button>Next</button>
    </div>
  );
}
