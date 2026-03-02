import { Link } from "react-router-dom";

export const users = [
  { id: 1, name: "Anna", age: 25, bio: "Frontend Developer" },
  { id: 2, name: "Max", age: 30, bio: "Backend Developer" },
  { id: 3, name: "Sophie", age: 28, bio: "Fullstack Developer" },
];

function Users() {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;