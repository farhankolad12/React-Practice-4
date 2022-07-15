import React from "react";

const Signin = ({ submit, output }) => {
  return (
    <div className="signin">
      <form onSubmit={submit}>
        <label>Enter Your Name</label>
        <input type={"text"} placeholder="Enter Name" />
        <label>Enter Your Email</label>
        <input type={"email"} placeholder="Enter Email" />
        <input type={"submit"} placeholder="Sign In" />
      </form>
      <p>{output}</p>
    </div>
  );
};

export default Signin;
