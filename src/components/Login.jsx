import React from 'react'
import { Redirect } from "react-router-dom";
import "../App.css";


export default function Login(props) {
    if (props.isLoggedIn){
        return <Redirect to="/"/>;
    }
    
        return (
            <div>
                <h1>LOG IN</h1>
                <form className="login-form" onSubmit={(evt) => props.handleLogin(evt)}>
                <input 
                type="text" placeholder="Username"
                onChange={(evt) => props.handleChange(evt)}
                value={props.logUsername}></input><br></br>

                <input 
                type="password" placeholder="Password"
                name="password"
                onChange={(evt) => props.handleChange(evt)}
                value={props.logPassword}
                ></input>
                <br></br>
                <button>Log In</button>
                </form>
            </div>
        )
    }

