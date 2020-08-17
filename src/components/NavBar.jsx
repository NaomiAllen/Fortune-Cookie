import React from 'react'

export default function NavBar(props) {

        return (
            <container>
                <link to="/Home" ><button>Home</button></link>
                <link to="/NewFortune"><button>My Fortunes</button></link>
                <link to="/Login" onClick={() => props.handleLogout()}><button>Logout</button></link>
                
            </container>
        )
    }





