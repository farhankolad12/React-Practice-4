import React from "react";
import { Link } from "react-router-dom";

const Login = ({ submit, output }) => {
  return (
    <div className="login">
      <form onSubmit={submit}>
        <label>Email: </label>
        <input type={"email"} placeholder="Enter Your Email" />
        <Link to={output === true ? "/dashboard" : "/login"}>
          <input type={"submit"} />
        </Link>
      </form>
    </div>
  );
};

export default Login;
