import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.wrapper}>
      <NavLink to="/register" className={css.link}>
        Реєстрація
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Увійти
      </NavLink>
    </div>
  );
}
