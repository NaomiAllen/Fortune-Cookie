import React, { Component } from 'react'
import "../index.css";

let baseURL;

if (process.env.NODE_ENV === 'development'){
    baseURL = 'http://localhost:3001';
} 

export default class NewFortune extends Component {
        state={
            formData: {
                fortune:""
            }
    };


    handleChange = (event) => {
        const formData = {...this.state.formData, [event.target.name]: event.target.value};
        this.setState({formData});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        let NewFortune= this.state.formData
        console.log(NewFortune)
        fetch(baseURL + "/fortunes/", {
            method: "POST",
            body: JSON.stringify(
                NewFortune
    ),
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        this.setState({
            formData: {
                fortune: ""
            } 
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
                    type="text" 
                    id="NewFortune"
                    value={this.state.formData.fortune} 
                    onChange={this.handleChange}></textarea><br />


                    <button type='submit' id="fortunebtn">ADD FORTUNE</button>
                </form>
            </div>
        )
    }
}

