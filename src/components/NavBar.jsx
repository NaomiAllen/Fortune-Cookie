import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class NavBar extends Component {


    render() {
        return (
            <container>
                <Link to="/">Home</Link>
                <Link to="/login">Logout</Link>
                <Link to="/SignUp">Sign Up</Link>
            </container>
        )
    }
}




