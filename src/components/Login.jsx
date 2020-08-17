import React from 'react'
import { Redirect } from "react-router-dom";
import "../App.css";
import { Form,Button,ButtonToolbar, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';

export default function Login(props) {
    if (props.isLoggedIn){
        return <Redirect to="/"/>;
    }

        return (
                <Form>
                    <FormGroup onSubmit={(evt) => props.handleLogin(evt)}>
                        <FormControl type="text" placeholder="Username"
                        onChange={(evt) => props.handleChange(evt)}
                        value={props.logUsername} id="loginform"/>
                        
                    </FormGroup><br />

                    <FormGroup>
                    <FormControl name="password" type="password" placeholder="Password" onChange={(evt) => props.handleChange(evt)}
                    value={props.logPassword}/>
                    </FormGroup><br />
                    <FormGroup>
                        <ButtonToolbar>
                            <Button appearance="primary">Submit</Button>
                            <Button appearance="default">Cancel</Button>
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
        )}
            
