import React from "react";
import { Link } from "react-router-dom";

function ViewPostButton({ id }) {
  return (
    <Link
      className="button"
      to={`/posts/${id}`}
    >
      View Post
    </Link>
  );
}

export default ViewPostButton;