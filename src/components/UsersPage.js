import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mike" }
];

function UsersPage() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UsersPage;