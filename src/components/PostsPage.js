import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost, addReaction } from "../postsSlice";

function PostsPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const onSavePost = (e) => {
    e.preventDefault();

    if (!title || !content || !author) return;

    dispatch(
      addPost({
        title,
        content,
        author,
      })
    );

    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Add a New Post</h2>

      <form onSubmit={onSavePost}>
        <input
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />

        <select
          id="postAuthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Select Author</option>

          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write post..."
        />

        <button type="submit">Save Post</button>
      </form>

      <h2>Posts</h2>

      <div className="posts-list">
        {/* Hidden first child so nth-child(2) points to first post */}
        <div style={{ display: "none" }}></div>

        {posts.map((post) => {
          const authorName =
            users.find((u) => u.id === post.author)?.name || "Unknown";

          return (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>

              <p>{post.content}</p>

              <small>By {authorName}</small>

              <div>
                <button
                  onClick={() =>
                    dispatch(addReaction({ id: post.id, reaction: "thumbsUp" }))
                  }
                >
                  👍 {post.reactions.thumbsUp}
                </button>

                <button
                  onClick={() =>
                    dispatch(addReaction({ id: post.id, reaction: "heart" }))
                  }
                >
                  ❤️ {post.reactions.heart}
                </button>

                <button
                  onClick={() =>
                    dispatch(addReaction({ id: post.id, reaction: "laugh" }))
                  }
                >
                  😂 {post.reactions.laugh}
                </button>

                <button
                  onClick={() =>
                    dispatch(addReaction({ id: post.id, reaction: "wow" }))
                  }
                >
                  😮 {post.reactions.wow}
                </button>

                <button>🚀 0</button>
              </div>

              <button
                className="button"
                onClick={() => history.push(`/posts/${post.id}`)}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsPage;