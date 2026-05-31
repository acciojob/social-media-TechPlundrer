import React, { useState } from "react";

function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        id="postAuthor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="">Select Author</option>
        <option value="John">John</option>
        <option value="Jane">Jane</option>
        <option value="Mike">Mike</option>
      </select>

      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Save Post</button>
    </form>
  );
}

export default CreatePostForm;