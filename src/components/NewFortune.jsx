import React, { Component } from 'react'

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
        fetch(baseURL, {
            method: "POST",
            body: JSON.stringify({
                NewFortune
    }),
    headers: {
        "Content-Type": "application/json",
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
                    <input 
                    name="fortune"
                    type="text" 
                    id="NewFortune"
                    value={this.state.formData.fortune} 
                    onChange={this.handleChange}></input>


                    <button type='submit'>Create Fortune</button>
                </form>
            </div>
        )
    }
}

