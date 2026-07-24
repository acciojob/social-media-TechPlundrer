import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UsersPage() {
  const users = useSelector((state) => state.users);
  const history = useHistory();

  return (
    <div>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => history.push(`/users/${user.id}`)}
            style={{ cursor: "pointer" }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;