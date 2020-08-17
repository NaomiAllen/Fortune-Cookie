import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import { Grommet } from 'grommet';

export default class NavBar extends Component {


    render() {
        return (
            <container>
                <Link to="/">Home</Link>
                <Link to="/login">Logout</Link>
                <Link to="/login">Login</Link>
                <Link to="/SignUp">Sign Up</Link>
                <Link to="/NewFortune">Add Fortune</Link>
            </container>
        )
    }
}




