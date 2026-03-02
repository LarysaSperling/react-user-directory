import { useParams } from "react-router-dom";
import { users } from "../../data/users";
import styles from "./styles.module.css";

function UserProfile() {
  const { userId } = useParams();
  const user = users.find(
    (u) => u.id === parseInt(userId)
  );

  if (!user) return <h2>User not found</h2>;

  return (
    <div className={styles.profile}>
      <h1>{user.name}</h1>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
}

export default UserProfile;