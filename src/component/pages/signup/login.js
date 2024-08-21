import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="container-2">
          <div className="quote-box">
            <span className="quote">
              "Traveling – it leaves you speechless at first, and then turns you
              into a storyteller." <br />– Ibn Battuta –
            </span>
          </div>
        </div>
        <div className="container-6">
          <div className="header">
            <p className="login-title">Login</p>
            <div className="logo">
              <span className="destt">Viet</span>
              <span className="dest">Dests</span>
            </div>
          </div>
          <p className="welcome-back">
            Welcome back! Please login to your account
          </p>
          <form action="#" method="POST">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="rectangle-59"
                required
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="rectangle-60"
                required
              />
            </div>
            <div className="remember-me-forgot">
              <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <a href="#" className="forget-password">
                Forgot Password?
              </a>
            </div>
            <div className="container-3">
              <button type="submit" className="login-account">
                Login
              </button>
            </div>
          </form>
          <span className="another-method">Another Method</span>
          <div className="social-icons">
            <FaFacebook size={32} style={{ margin: "0 10px" }} />
            <FaGoogle size={32} style={{ margin: "0 10px" }} />
            <FaTwitter size={32} style={{ margin: "0 10px" }} />
          </div>
          <span className="new-user">
            New user? <a href="#">Register</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
