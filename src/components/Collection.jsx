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
            console.log(data)
            return data.json()},
            err => console.log(err))
        .then(parsedData => {
            console.log(parsedData)
            this.setState({
            collection: parsedData
        })
    })
    }

    handleDelete(id){
        fetch(baseURL+ '/collection'+ id,{
            method:'DELETE'
        }).then((response)=>{
            const findIndex = this.state.collection.findIndex((collection) => collection._id === id);
            const copyFortune = [...this.state.fortune];
            copyFortune.splice(findIndex, 1);
            this.setState({fortune: copyFortune})
        })

    }
    
    render() {
        return (
            <div className='container'>
                <h1>Your Fortunes</h1>
                <img 
                src="fortune1.jpg" 
                alt="" 
                id="collectimg"></img>
                <table>
                    {this.state.collection.map(fortune =>{
                        return(

                            
                            <tr>
                                <li>
                                <td key={fortune._id}>{fortune.fortune}</td>
                                </li>
                            </tr>
                        )
                    })}
                </table>
                
            </div>
        )
    }
}
