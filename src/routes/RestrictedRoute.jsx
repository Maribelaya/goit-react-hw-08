// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

// export default function RestrictedRoute({ children }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);

//   if (isRefreshing) {
//     return <p>Loading...</p>;
//   }

//   return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
// }
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
