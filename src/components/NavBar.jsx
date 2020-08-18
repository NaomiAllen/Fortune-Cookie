import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class NavBar extends Component {


    render() {
        return (
            <nav id="navs">
                <Link to="/" id="home">Home</Link>
                <Link to="/login" id="logout">Logout</Link>
                <Link to="/login" id="loginz">Login</Link>
                <Link to="/SignUp" id="signup">Sign Up</Link>
                <Link to="/NewFortune" id="newfort">Add Fortune</Link>
            </nav>
                
            
        )
    }
}




