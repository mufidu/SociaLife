import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Center } from "@mantine/core";

const Auth = () => {
  return (
    <div className="Auth">
      {/* <Login/> */}
      <Signup/>
    </div>
  );
};

function Login(){
  return(
    <div className="infoForm authForm">
      <div className="title">
        <img src={Logo} alt="" />
      </div>
      <form className="infoForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>

          
          <div>
          <button className="button infoButton">Login</button>
          </div>

          <div>
              <span style={{ fontSize: "12px", justifyContent:Center }}>
                Don't have an account? Sign up
              </span>
          </div>
      </form>
    </div>
  );
}

function Signup(){
  return(
    <div className="infoForm authForm">
      <div className="title">
        <img src={Logo} alt="" />
      </div>
      <form className="infoForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Confirm Password"
              name="confirmpass"
              />
          </div>
        <div>
        <button className="button infoButton" type="submit">Signup</button>
        </div>
        <div>
            <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
        </div>
        
      </form>
    </div>
  );
}

export default Auth;
