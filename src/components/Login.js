import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ submit, output }) => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <form onSubmit={submit}>
        <label>Email: </label>
        <input type={"email"} placeholder="Enter Your Email" />
        <label>Enter Password</label>
        <input type={"password"} placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
      <p>{output === true ? navigate("/dashboard") : output}</p>
    </div>
  );
};

export default Login;
