import React, { Component } from 'react'
import "../index.css";
import Button from '@material-ui/core/Button';






export default class Home extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <img src="/comic1.jpg" alt="img" id="comic"></img>
                <img src="/fortunecookie1.jpeg" alt='oops' id='cookie1'></img>

                {/* <button
                onClick={this.props.getRandomFortune}
                id="homebtn">Click Me</button> */}

                <Button variant="contained" color="primary" href="#contained-buttons"
                onClick={this.props.getRandomFortune}
                id="homebtn">Click Me</Button>
                
                

                <p id="randomFortune">{this.props.randomFortune}</p>
                
                
            </div>
            
        )
    }
}
