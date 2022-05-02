import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="header">
      <div className="navbar-container">
        <NavLink className="navbar" to="/">
          <h1 className="navbar-m-lr-1">LUCENT NOTES</h1>
        </NavLink>
      </div>
    </header>
  );
};

export { Navigation };
