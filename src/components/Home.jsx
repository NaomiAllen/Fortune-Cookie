import React, { Component } from 'react'
import "../index.css";



// alert('Click the Cookie for your fortune')


export default class Home extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <img src="/comic1.jpg" alt="img" id="comic"></img>
                <img src="/fortunecookie1.jpeg" alt='oops' id='cookie1'></img>
                <button 
                onClick={this.props.getRandomFortune}
                id="homebtn">Click Me</button>
                <p id="randomFortune">{this.props.randomFortune}</p>
                
                
            </div>
            
        )
    }
}
