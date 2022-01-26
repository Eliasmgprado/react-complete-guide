import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const isAuthenticated = useSelector((state) => {
    return state.auth.isAuthenticated;
  });

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
