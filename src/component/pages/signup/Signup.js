import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import "./Signup.css";

function Signup() {
  return (
    <div className="register">
      <div className="container">
        <div className="container-6">
          <div className="container-1">
            <form action="#" method="POST">
              <header>
                <div className="logo">
                  <span className="destt">Viet</span>
                  <span className="dest">Dests</span>
                </div>
              </header>
              <p className="viet-dests create-new-account-title">
                Create new account
              </p>
              <div className="container-7">
                <div className="container-4">
                  <div className="firstname">
                    <label htmlFor="firstname">Firstname</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="rectangle-57"
                      required
                    />
                  </div>
                  <div className="lastname">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="rectangle-58"
                      required
                    />
                  </div>
                </div>
              </div>
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
              <div className="confirm-password">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="rectangle-61"
                  required
                />
              </div>
              <div className="container-3">
                <button type="submit" className="create-account">
                  Create Account
                </button>
              </div>
            </form>
            <span className="already-have-an-account">
              Already have an account? <a href="#">Login</a>
            </span>
            <span className="another-method"> Or use another method </span>
            <div className="social-icons">
              <FaFacebook size={32} style={{ margin: "0 10px" }} />
              <FaGoogle size={32} style={{ margin: "0 10px" }} />
              <FaTwitter size={32} style={{ margin: "0 10px" }} />
            </div>
            <div className="container-5">
              <div className="ellipse-10"></div>
              <div className="ellipse-11"></div>
              <div className="ellipse-12"></div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <span className="our-destination-is-not-aplace-but-anew-way-of-seeing-henry-miller">
            "Our destination is not a place, but a new way of seeing." – Henry
            Miller –
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
