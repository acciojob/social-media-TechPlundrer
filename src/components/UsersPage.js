import React from "react";

function UsersPage() {

  const handleClick = (e) => {
    e.preventDefault(); // prevent reload
  };

  return (
    <div>
      <h2>Users</h2>

      <ul>
        <li><a href="/users/1" onClick={handleClick}>User 1</a></li>
        <li><a href="/users/2" onClick={handleClick}>User 2</a></li>
        <li><a href="/users/3" onClick={handleClick}>User 3</a></li>
      </ul>

      <div className="post">
        <h3>Sample Post</h3>
      </div>
    </div>
  );
}

export default UsersPage;