import { Link } from "react-router-dom";
import { users } from "../../data/users";
import styles from "./styles.module.css";

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <div className={styles.grid}>
        {users.map((user) => (
          <Link 
            key={user.id}
            to={`/users/${user.id}`}
            className={styles.card}
          >
            {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;