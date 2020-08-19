import React, { Component } from 'react'
import "../index.css";

let baseURL;

if (process.env.NODE_ENV === 'development'){
    baseURL = 'http://localhost:3001';
} 

export default class NewFortune extends Component {
    constructor(props){
        super(props);
        this.state = {
            fortune: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        this.setState({fortune: event.target.value });
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        fetch(baseURL + "/fortunes", {
            method: "POST",
            body: JSON.stringify({
                fortune: this.state.fortune
        }),
    headers: {
        "Content-Type": "application/json",
        
    },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        this.setState({
            fortune: "",   
        });
    })
    .catch((error) => console.error({ Error: error }));
}


        render(){
        return (
            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <img 
                    src="fortune1.jpg" alt=""
                    id="fortuneimg" ></img>

                    <img 
                    src="fortunecookie2.jpg" alt="" 
                    id="cookie2"></img>

                    <textarea 
                    name="fortune"
                    type="textarea" 
                    id="NewFortune"
                    value={this.state.fortune} 
                    onChange={this.handleChange}></textarea><br />


                    <button type='submit' id="fortunebtn">ADD FORTUNE</button>
                </form>
            </div>
        )
    }
}

