import React from "react";
import { useState } from "react";
import { addEmail } from "../helpers/helper";

const Signup = () => {
  const [signinOutput, setSigninOutput] = useState("");

  const submitUserToFirebase = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const name = e.target[1].value;
    if (name === "" || email === "") {
      setSigninOutput("Fill Out The Details");
    } else {
      addEmail(email, name)
        .then((res) => {
          e.target.reset();
          setSigninOutput("Succesfully Registered!");
        })
        .catch((err) => setSigninOutput(err.message));
    }
  };

  return (
    <div className="signin">
      <form onSubmit={submitUserToFirebase}>
        <label>Enter Your Email</label>
        <input type={"email"} placeholder="Enter Email" />
        <label>Enter Password</label>
        <input type={"password"} placeholder="Enter Password" />
        <input type={"submit"} placeholder="Sign In" />
      </form>
      <p>{signinOutput}</p>
    </div>
  );
};

export default Signup;
