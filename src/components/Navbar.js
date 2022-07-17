import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = ({ loggedIn }) => {
  return (
    <nav className="navbar">
      <ul>
        <CustomLink
          to={loggedIn ? "/dashboard" : "/signin"}
          children="Sign In"
        />
        <CustomLink
          to={loggedIn ? "/dashboard" : "/login"}
          children="Login In"
        />
      </ul>
    </nav>
  );
};

const CustomLink = ({ to, children }) => {
  const currentPath = useResolvedPath(to);
  const isActive = useMatch({ path: currentPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default Navbar;
