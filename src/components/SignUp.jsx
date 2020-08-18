import React from "react";
import { Redirect } from "react-router-dom";
import "../index.css";
import { Form, Button, ButtonToolbar, FormGroup, FormControl} from 'rsuite';


export default function SignUp(props) {
  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (props.isSignedUp) {
    return <Redirect to="/login" />;
  }

  return (
    <Form>
    <img src="/comiclogin3.jpg" alt="" id="loginComic3"></img>
        <FormGroup onSubmit={(evt) => props.handleLogin(evt)} >
            <FormControl type="text" placeholder="USERNAME"
            onChange={(evt) => props.handleChange(evt)}
            value={props.logUsername} id="SignupForm"/>
            
        </FormGroup><br />

        <FormGroup>
        <FormControl name="password" type="password" placeholder="PASSWORD" onChange={(evt) => props.handleChange(evt)}
        value={props.logPassword} id="SignupPass"/>
        </FormGroup><br />
        <FormGroup>
            <ButtonToolbar>
                <Button appearance="ghost" id="Signupbtn">Sign up</Button>
            </ButtonToolbar>
        </FormGroup>
    </Form>
)}

