import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ loggedIn }) => {
  return (
    <div>
      <p>Dashboard</p>
      <button>
        <Link onClick={loggedIn} to={"/"}>
          Logout
        </Link>
      </button>
    </div>
  );
};

export default Dashboard;
