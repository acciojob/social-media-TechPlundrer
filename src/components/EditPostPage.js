import React, { useState } from "react";

function EditPostPage() {
  const [title, setTitle] = useState("Sample Post");
  const [content, setContent] = useState("Sample Content");

  return (
    <>
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button>
        Save Post
      </button>
    </>
  );
}

export default EditPostPage;