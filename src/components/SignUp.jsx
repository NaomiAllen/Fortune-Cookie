import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import "../index.css";
import { Form, Button, ButtonToolbar, FormGroup, FormControl} from 'react-bootstrap';

let baseURL;
export default class Signup extends Component  {
    constructor(props){
        super(props);
        this.state={
            userName: "",
            password: "",
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSignUp=this.handleSignUp.bind(this)
    }

    handleChange = (event)=>{
        console.log(event)
        console.log(event.id)
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSignUp = (event)=>{
        event.preventDefault();
        fetch(baseURL + '/users',{
            method: 'POST',
            body: JSON.stringify({
            userName: this.state.userName,
            password: this.state.password
        }),
            headers:{
                "Content-type": "application/json",
            }
        })
        .then((res)=>{
            return res.json();
    })
        .then ((data)=>{
        console.log(data);
        this.setState({
            userName: "",
            password: "",
            isSignedUp: true,
        });
      });
    }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  else (isSignedUp) {
    return <Redirect to="/login" />;
  }
render(){
  return (
    <Form>
    <img src="/comiclogin3.jpg" alt="" id="loginComic3"></img>
        <FormGroup onSubmit={(evt) => this.props.handleSignUp(evt)} >

            <FormControl 
            name="userName"
            type="text" 
            placeholder="USERNAME"
            onChange={(event)=> this.handleChange(event)}
            value={this.state.userName} 
            id="userName"/>
            
        </FormGroup><br />

        <FormGroup>
        <FormControl 
        name="password" 
        type="password" 
        placeholder="PASSWORD" 
        onChange={(evt) => this.handleChange(evt)}
        value={this.state.password} 
        id="password"/>
        </FormGroup><br />
        <FormGroup>
            <ButtonToolbar>
            <Button  
            id="Signupbtn" type="submit" onSubmit={(evt) => this.props.handleSignUp(evt)}>Sign up</Button>
            </ButtonToolbar>
        </FormGroup>
    </Form>
)}
}

