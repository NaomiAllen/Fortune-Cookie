import React from 'react'
import { Redirect } from "react-router-dom";
import "../index.css";
import { Form, Button, ButtonToolbar, FormGroup, FormControl} from 'react-bootstrap';

export default function Login(props) {
    if (props.isLoggedIn){
        return <Redirect to="/"/>;
    }

        return (
                <Form>
                <img src="/comiclogin2.jpg" alt="" id="loginComic"></img>
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
                        <ButtonToolbar>
                            <Button appearance="ghost" id="loginbtn">Login</Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
        )}
            
