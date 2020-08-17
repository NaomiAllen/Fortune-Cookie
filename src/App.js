import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Show from './components/Show';
import NewFortune from './components/NewFortune';



let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3001";
}

export default class App extends Component {
  state = {
    
    fortune: "",
    userName: "",
    password: "",
    isSignedUp: false,
    logUsername: "",
    logPassword: "",
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSignup = (event)=>{
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
      password: "",
      isSignedUp: true,
      userName: "",
    })
  })
}

handleLogin = (event)=>{
  event.preventDefault();

  fetch(baseURL + "/sessions", {
    method: "POST",
    body: JSON.stringify({
      logUsername: this.state.logUsername,
      logPassword: this.state.logPassword
    }),
    headers: {
      "Content-type": "application/json",
    }
  })
  .then((res, err) => {
    if (err) {
      console.log(err);
    }
    return res.json();
  }).then((data) => {
      if (data.error) {
        this.setState({
          warning: data.error,
        });
      }else{
        this.setState({
          isLoggedIn: true,
          logUsername: data.userName,
          logPassword: data.password,
        })
      }
  });
};

handleLogout = ()=>{
  this.setState({
    isLoggedIn: false,
    userName: "",
    password: "",
    isSignedUp: false,
  })
}

handleAddFortune = ()=> {
  this.setState({
    
  })
}


  render() {
    return (
        <Router>
          <NavBar
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.state.handleLogout}/>

          <div className='App'>
            <Switch>
              <Route
                exact
                path="/"
                render={()=>(
                  <Home
                    isLoggedIn={this.state.isLoggedIn}
                    userName={this.state.userName}
                    />
                  )}
                />
              <Route
                exact
                path="/login"
                render={() => (
                  <Login
                    logPassword={this.state.logPassword}
                    handleChange={this.handleChange}
                    handleLogin={this.handleLogin}
                    isLoggedIn={this.state.isLoggedIn}
                    warning={this.state.warning}
                  />
                )}
              />
              <Route
                exact
                path="/SignUp"
                render={() => (
                  <SignUp
                    userName={this.state.userName}
                    password={this.state.password}
                    handleChange={this.handleChange}
                    handleSignup={this.handleSignup}
                    isLoggedIn={this.state.isLoggedIn}
                    isSignedUp={this.state.isSignedUp}
                  />
                )}
              />
               <Route
                exact
                path="/Show"
                render={() => (
                  <Show
                  handleChange={this.handleChange}
                  />
                )}
              />
              <Route
                exact
                path="/NewFortune"
                render={() => (
                  <NewFortune

                  />
                )}
              />
            </Switch>
          </div>
        </Router>

    )
  }
}

