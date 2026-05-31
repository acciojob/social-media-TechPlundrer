import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/users">Users</Link>
      {" | "}
      <Link to="/notifications">Notifications</Link>
    </div>
  );
}

export default Navbar;