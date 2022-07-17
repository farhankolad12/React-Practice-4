import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <button>
        <Link to={"/"}>Logout</Link>
      </button>
    </div>
  );
};

export default Dashboard;
