import React from 'react'
import { Redirect } from "react-router-dom";
import "../index.css";
import { Form, FormGroup, FormControl} from 'react-bootstrap';
import Button from '@material-ui/core/Button';

export default function Login(props) {
    if (props.isLoggedIn){
        return <Redirect to="/"/>;
    }

        return (
                <Form>
                <img src="/comiclogin2.jpg" alt="" id="loginComic"></img>
                <img src='fortunecookie3.png' alt="" id="cookie3"></img>
                    <FormGroup onSubmit={(evt) => props.handleLogin(evt)} >
                        <FormControl 
                        type="text" 
                        placeholder="USERNAME"
                        onChange={(evt) => props.handleChange(evt)}
                        value={props.logUsername} id="LoginForm"/>
                        
                    </FormGroup><br />

                    <FormGroup>
                    <FormControl name="password" type="password" placeholder="PASSWORD" onChange={(evt) => props.handleChange(evt)}
                    value={props.logPassword} id="LoginPass"/>
                    </FormGroup><br />
                    <FormGroup>
                        
                            <Button
                            variant="contained" color="primary" id="loginbtn">Login</Button>
                        
                    </FormGroup>
                </Form>
        )}
            
