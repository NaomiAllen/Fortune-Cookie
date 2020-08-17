import React from "react";
import "../App.css";
import { Redirect } from "react-router-dom";


export default function SignUp(props) {
  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (props.isSignedUp) {
    return <Redirect to="/login" />;
  }

  return (
      <container>
      <div className="sign-up">
        <h2>Sign up</h2>
        <form
          onSubmit={(evt) => props.handleSignUp(evt)}
        >
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            onChange={(evt) => props.handleChange(evt)}
            value={props.userName}
          ></input>
          <br />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(evt) => props.handleChange(evt)}
            value={props.password}
          ></input>
          <br />
          <button type="submit">Sign up</button>
          <br />

        </form>
      </div>
      <br />
      </container>
    
  );
}


