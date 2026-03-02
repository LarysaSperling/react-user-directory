import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;