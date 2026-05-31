import React from "react";

function AddPostForm() {
    return(
        <div>
            <h2>Create Post</h2>

            <select id="postAuthor">
                <option>Select Author</option>
                <option> John</option>
                <option>Jane</option>
            </select>

            <br/>

            <input id="postTitle" placeholder="Title"/>

            <br />

            <textarea id="postContent" placeholder="Content"/>

            <br />
            <button className="button">
                Add Post
            </button>
        </div>
    );
}

export default AddPostForm;