import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


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
                
                <div id="collectdiv"> 
                    {this.state.collection.map(fortune =>{
                        return(
                            <div key={fortune._id}>

                                <IconButton 
                                type="submit"
                                onClick={this.props.handleDelete}>
                                <DeleteIcon />
                                </IconButton>
                            
                            
                                {fortune.fortune}

                            
                            </div>
                            
                            // <tr>
                                
                            //     <td key={fortune._id}>{fortune.fortune}</td>
                                
                            // </tr>
                        )
                    })}
                </div> 
                
            </div>
        )
    }
}
