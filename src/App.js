import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Show from './components/Show';
import NewFortune from './components/NewFortune';
import Collection from './components/Collection'



let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3001";
}

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      fortune: "",
      userName: "",
      password: "",
      isLoggedIn: false,
      isSignedUp: false,
      allFortunes: [],
      newFortune: "",
      randomFortune: "",
      
    }
    this.handleChange=this.handleChange.bind(this)
    
  }
  componentDidMount(){
    this.allFortunes()
}

allFortunes = (event)=>{
  fetch(baseURL + '/fortunes',{
    method:'GET'
},{mode: "cors"})

  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => {
    console.log(parsedData)
    this.setState({
      allFortunes: parsedData
    })
  },
  err=> console.log(err))
}

getRandomFortune = ()=>{
  let randomIndex = Math.floor(Math.random()* (this.state.allFortunes.length));
  console.log(randomIndex)
  let newRandomFortune= this.state.allFortunes[randomIndex]
  this.setState({
    randomFortune:newRandomFortune.fortune
  })
}


  handleChange = (event)=>{
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


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
      userName: "",
      password: "",
      isSignedUp: true,
    });
  });
}

handleLogin = (event)=>{
  event.preventDefault();

  fetch(baseURL + "/sessions", {
    method: "POST",
    body: JSON.stringify({
      userName: this.state.userName,
      password: this.state.password
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
  })
  .then((data) => {
      if (data.error) {
        this.setState({
          warning: data.error,
        });
      }else{
        this.setState({
          isLoggedIn: true,
          userName: data.userName,
          password: "",
        })
      }
  });
};

handleLogout = ()=>{
  this.setState({
    isLoggedIn: false,
    userName: "",
    isSignedUp: false,
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
                    randomFortune={this.state.randomFortune}
                    getRandomFortune={this.getRandomFortune}
                    />
                  )}
                />
              <Route
                exact
                path="/login"
                render={() => (
                  <Login
                    logPassword={this.state.password}
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
                    newFortune={this.state.newFortune}
                    handleChange={this.handleChange}
                  />
                )}
              />
              <Route
                exact
                path="/Collection"
                render={() => (
                  <Collection
                    collection={this.state.collection}
                    handleChange={this.handleChange}
                    fortune={this.state.fortune}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>

    )
  }
}

