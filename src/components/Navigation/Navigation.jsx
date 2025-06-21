import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Головна
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Контакти
        </NavLink>
      )}
    </nav>
  );
}
