import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UsersPage() {
  const users = useSelector((state) => state.users);
  const history = useHistory();

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <div
          key={user.id}
          className="post"
          onClick={() => history.push(`/users/${user.id}`)}
          style={{ cursor: "pointer", marginBottom: "15px" }}
        >
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default UsersPage;