import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
// import { Center } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction.js";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(false);
  console.log(loading)
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmpass: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (isSignUp) {
    //   if(data.password !== data.confirmpass){
    //     setConfirmPass(false)
    //   }
    // }

    if (isSignUp) {
      data.password = data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      <div className="infoForm authForm">
        <div className="title">
          <img src={Logo} alt="" />
        </div>
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
          </div>

          {isSignUp && (
            <div>
              <input
                type="password"
                className="infoInput"
                placeholder="Confirm Password"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            </div>
          )}
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>
          <div>
            <button className="button infoButton" type="Submit" disabled={loading}>
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
            </button>
          </div>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account? Login!"
                : "Don't have an account? Signup!"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
