import React, { Component } from 'react'

let baseURL;

if (process.env.NODE_ENV === 'development'){
    baseURL = 'http://localhost:3000';
} 

export default class NewFortune extends Component {
    constructor(props){
        super(props);
        this.state={
            fortune: "",
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value });
        // const formData = {...this.state.formData, [e.target.name]: e.target.value};
        // this.setState({formData});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        fetch(baseURL + "/fortune", {
            method: "POST",
            body: JSON.stringify({
                fortune: this.state.fortune,
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


    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <input 
                    name="fortune"
                    type="text" 
                    id="NewFortune"
                    value={this.state.fortune} onChange={this.handleChange}></input>


                    <button type='submit'>Create Fortune</button>
                </form>
            </div>
        )
    }
}
