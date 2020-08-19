import React, { Component } from 'react'


let baseURL;
if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3001";
  }
export default class Collection extends Component {
    constructor(props){
        super(props);
        this.state={
            collection: [],
        }
        this.getCollection = this.getCollection.bind(this)
    }
    componentDidMount(){
        this.getCollection()
    }
    
    getCollection() {
        fetch(baseURL+ '/collection',{
            method:'GET'
        },{mode: "cors"})
        
        .then(data => {
            return data.json()},
            err => console.log(err))
        .then(parsedData => console.log(parsedData),
        err=> console.log(err))
    }
    
    render() {
        return (
            <div className='container'>
                <h1>Your Fortunes</h1>
                <img 
                src="collect.jpg" 
                alt="" 
                id="collecting"></img>
                <table>
                    {this.state.collection.map(fortune =>{
                        return(
                            <tr>
                                <td key={fortune._id}>{fortune}</td>
                            </tr>
                        )
                    })}
                </table>
                
            </div>
        )
    }
}
