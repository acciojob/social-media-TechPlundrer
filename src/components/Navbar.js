import React from "react";

function Navbar() {
  return (
    <nav>
      <a href="/">Posts</a>{" "}
      <a href="/users">Users</a>{" "}
      <a href="/notifications">Notifications</a>{" "}
      <a href="/post">Create Post</a>
    </nav>
  );
}

export default Navbar;