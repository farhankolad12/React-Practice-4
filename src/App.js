import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Login from "./components/Login";
import { addEmail, getUser } from "./helpers/helper";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [signinOutput, setSigninOutput] = useState("");
  const [loginOutput, setLoginOutput] = useState(false);

  const submitUserToFirebase = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    if (name === "" || email === "") {
      setSigninOutput("Fill Out The Details");
    } else {
      addEmail(name, email);
      setSigninOutput(
        "You have succesfully Signed In Login using your Email from login page"
      );
      e.target.reset();
    }
  };

  const loginToDashboard = (e) => {
    let isLogin;
    e.preventDefault();
    const email = e.target[0].value;
    if (email === "") {
      return;
    } else {
      getUser(email).then((res) => {
        if (res) {
          isLogin = true;
        } else if (!res) {
          isLogin = false;
        }
      });
      setLoginOutput(isLogin);
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/signin"
          element={
            <Signin output={signinOutput} submit={submitUserToFirebase} />
          }
        />
        <Route
          path="/login"
          element={<Login output={loginOutput} submit={loginToDashboard} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
