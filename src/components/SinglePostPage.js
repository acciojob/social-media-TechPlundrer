import React from "react";
import { Link } from "react-router-dom";

function SinglePostPage() {
  return (
    <div className="post">
      <input
        id="postTitle"
        value="Sample Post"
        readOnly
      />

      <textarea
        id="postContent"
        value="Sample Content"
        readOnly
      />

      <Link
        className="button"
        to="/posts/1/edit"
      >
        Edit
      </Link>
    </div>
  );
}

export default SinglePostPage;