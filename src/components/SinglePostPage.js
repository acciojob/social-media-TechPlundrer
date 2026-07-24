import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { editPost } from "../postsSlice";

function SinglePostPage() {
  const { postId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const post = useSelector((state) =>
    state.posts.find((p) => p.id === postId)
  );

  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSave = () => {
    dispatch(
      editPost({
        id: post.id,
        title,
        content,
      })
    );

    history.push("/");
  };

  return (
    <div className="post">
      <h2>Edit Post</h2>

      <input
        id="postTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="button" onClick={handleSave}>
        Save Post
      </button>
    </div>
  );
}

export default SinglePostPage;