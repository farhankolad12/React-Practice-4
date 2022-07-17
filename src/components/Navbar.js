import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <CustomLink to="/signin" children="Sign In" />
        <CustomLink to="/login" children="Login In" />
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
