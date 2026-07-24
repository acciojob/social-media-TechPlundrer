import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PostsPage() {
  const history = useHistory();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Ideas",
      content: "Test Content",
      reactions: [0, 0, 0, 0]
    }
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const addPost = () => {
    if (!title || !content || !author) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      reactions: [0, 0, 0, 0]
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  const addReaction = (id, index) => {
    setPosts(posts.map(p => {
      if (p.id === id && index < 4) {
        const newReactions = [...p.reactions];
        newReactions[index]++;
        return { ...p, reactions: newReactions };
      }
      return p;
    }));
  };

  return (
    <div>
      <h2>Add a New Post</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        addPost();
      }}>
        <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />

        <select id="postAuthor" onChange={(e) => setAuthor(e.target.value)}>
          <option value="">Select Author</option>
          <option>Uriah</option>
          <option>Lauren</option>
          <option>Magnus</option>
        </select>

        <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />

        <button type="submit">Save Post</button>
      </form>

      <h2>Posts</h2>

      <div className="posts-list">
        <div></div>

        {posts.map(post => (
          <div key={post.id} className="post">

            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <div></div>

            <div>
              {["👍","❤️","😂","😮","🚫"].map((r,i)=>(
                <button key={i} onClick={()=>addReaction(post.id,i)}>
                  {r} {i===4 ? 0 : post.reactions[i]}
                </button>
              ))}
            </div>

            <button
              className="button"
              onClick={() => history.push(`/posts/${post.id}`)}
            >
              View
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;