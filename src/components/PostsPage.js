import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPost, addReaction } from "../postsSlice";

function PostsPage() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const onSavePost = (e) => {
    e.preventDefault();

    if (title && content && author) {
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
    }
  };

  const reactionEmoji = {
    thumbsUp: "👍",
    heart: "❤️",
    laugh: "😂",
    wow: "😮",
  };

  return (
    <div>
      <h2>Add a New Post</h2>

      <form onSubmit={onSavePost}>
        <input
          id="postTitle"
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          placeholder="Write your post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Save Post</button>
      </form>

      <h2>Posts</h2>

      <div className="posts-list">
        {posts.map((post) => {
          const authorName =
            users.find((u) => u.id === post.author)?.name || "Unknown";

          return (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>

              <p>
                <strong>Author:</strong> {authorName}
              </p>

              <p>{post.content}</p>

              <div>
                {Object.entries(reactionEmoji).map(([name, emoji]) => (
                  <button
                    key={name}
                    onClick={() =>
                      dispatch(
                        addReaction({
                          id: post.id,
                          reaction: name,
                        })
                      )
                    }
                  >
                    {emoji} {post.reactions[name]}
                  </button>
                ))}
              </div>

              <Link to={`/posts/${post.id}`}>
                <button className="button">Edit</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsPage;