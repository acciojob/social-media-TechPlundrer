import React from "react";
import { Link } from "react-router-dom";

function PostsList() {
    return (
        <section className="posts-list">
            <article className="post">
                <h3>My First Post</h3>

                <p>Hello React Router</p>

                <button className="button">
                👍 0
                </button>

                <Link to="/editPost/1">
                    <button className="button">
                        Edit Post
                    </button>
                </Link>
            </article>
        </section>
    );
}

export default PostsList;