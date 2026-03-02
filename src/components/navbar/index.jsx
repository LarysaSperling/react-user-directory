import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink 
        to="/" 
        className={({ isActive }) =>
          isActive ? styles.active : ""
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/users"
        className={({ isActive }) =>
          isActive ? styles.active : ""
        }
      >
        Users
      </NavLink>
    </nav>
  );
}

export default Navbar;