import React from 'react';

function EditPost() {
    return (
        <div>
            <h2>Edit Post</h2>

            <input id='postTitle' 
            defaultValue="My First Post"/>

            <textarea id='postContent'
            defaultValue='Hello React Router'
            />

            <br />

            <button className='button'>
                Save Post
            </button>
        </div>
    );
}

export default EditPost;