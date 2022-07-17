import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import { getUser } from "./helpers/helper";
import { useState } from "react";

function App() {
  const [loginOutput, setLoginOutput] = useState("");

  const loginToDashboard = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    if (email === "" || password === "") {
      setLoginOutput("Fill Out Details");
    } else {
      getUser(email, password)
        .then((res) => {
          setLoginOutput(true);
        })
        .catch((err) => setLoginOutput(err.message));
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signup />} />
        <Route
          path="/login"
          element={<Login output={loginOutput} submit={loginToDashboard} />}
        />
        <Route element={<PrivateRoute output={loginOutput} />}>
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
