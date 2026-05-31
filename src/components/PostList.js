import React from "react";
import ViewPostButton from "./ViewPostButton";
import Reactions from "./Reactions";

function PostList() {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" }
  ];

  return (
    <div className="posts-list">
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <Reactions />
          <ViewPostButton id={post.id} />
        </div>
      ))}
    </div>
  );
}

export default PostList;