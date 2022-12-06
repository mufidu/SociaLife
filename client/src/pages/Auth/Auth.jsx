import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from "../../actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.authReducer.loading);

  // pengecekan kondisi sudah sign up atau belum, jika belum menampilkan halaman login
  const [isSignUp, setIsSignUp] = useState(false);

  // menginisiasi data awal pada form
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmpass: "",
  });

  // pengecekan konfirmasi password saat signup
  const [confirmpass, setConfirmPass] = useState(true);

  // membuat perubahan data pada form
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // submit form ke backend-server
  const handleSubmit = (e) => {
    // cegah browse mengeksekusi action default
    e.preventDefault();

    // cek sedang berada di halaman apa
    if (isSignUp) {
      // pengkondisian konfirmasi password
      if (data.password === data.confirmpass) {
        dispatch(signUp(data));
      } else {
        setConfirmPass(false);
      }
    } else {
      dispatch(logIn(data));
    }
  };

  // mereset data pada form ketika berpindah halaman form
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
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <h3>{isSignUp ? "Sign up" : "Log in"}</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={data.username}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
          />
        </div>

        {isSignUp && (
          <div>
            <input
              type="password"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={data.confirmpass}
            />
          </div>
        )}

        <span
          style={{
            display: confirmpass ? "none" : "block",
            color: "red",
            fontSize: "12px",
            alignSelf: "flex-end",
            marginRight: "5px",
          }}
        >
          * Confirm Password is not same
        </span>

        <button className="button infoButton" type="submit" disabled={loading}>
          {loading ? "Loading..." : isSignUp ? "Signup" : "Login"}
        </button>
        <div>
          <span
            className="change-form"
            onClick={() => {
              setIsSignUp((prev) => !prev);
              resetForm();
            }}
          >
            {isSignUp
              ? "Already have an account? Login!"
              : "Don't have an account? Signup"}
          </span>
        </div>
      </form>

      {/* </div> */}
    </div>
  );
};

export default Auth;
