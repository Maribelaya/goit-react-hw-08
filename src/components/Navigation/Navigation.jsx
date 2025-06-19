import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Головна
      </NavLink>
    </nav>
  );
}
