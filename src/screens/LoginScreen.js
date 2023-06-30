import React, { useState } from "react";
import SignupScreen from "./SignupScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_bg">
        <img className="loginScreen_logo" src="/bunnuflix.png" alt="bg" />
        <button onClick={() => setSignIn(true)} className="btn">
          Sign In
        </button>

        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
