import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const { userId } = useParams();

  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);

  const user = users.find((u) => u.id === userId);

  const userPosts = posts.filter((post) => post.author === userId);

  return (
    <div>
      <h2>{user ? user.name : "User"}'s Posts</h2>

      {userPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="posts-list">
          {userPosts.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>

              <p>{post.content}</p>

              <Link to={`/posts/${post.id}`}>
                <button className="button">Edit</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserPage;